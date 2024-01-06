const UserRepo = require('../repositories/userRepo');
const { JWT_KEY } = require('../config/serverConfig');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserService {
    constructor(){
        this.userRepo = new UserRepo();
    }

    async create(data){
        try {
            const response = await this.userRepo.create(data);
            return response;
        } catch (error) {
            console.log("Error occured in user service layer ");
            throw({error});
        }
    }

    async destroy(userId){
        try {
            console.log(userId);
            const response = await this.userRepo.destroy(userId);
            return response;
        } catch (error) {
            console.log("Error occured in user service layer ");
            throw({error});
        }
    }

    async signIn(email , plainPassword){
        try {
            // step 1 -> fetch the user by email
            const user = await this.userRepo.getUserByEmail(email);

            // step 2 -> comapare password in db and plainpassword
            const passwordMatch = this.#validatePassword(plainPassword,user.password);

            if(!passwordMatch){
                console.log("Password mismatch !!");
                throw({error: "Incorrect password"});
            }

            // step 3 -> if passwords match , create a token and send to client
            const token = this.#createToken({email: user.email,id: user.id});
            return token;
        } catch (error) {
            console.log("Error occured in user service layer ");
            throw({error});
        }
    }

    async isAuthenticated(token){
        try {
            const response = this.#verifyToken(token);
            if(!response){
                throw {error : "Invalid Token"}
            }
            const user = this.userRepo.getUser(response.id);
            return user.id;
        } catch (error) {
            console.log("Error occured in user service layer ");
            throw({error});
        }
    }

    #createToken(user){
        try {
            const createdToken = jwt.sign(user, JWT_KEY, {expiresIn: '3d'});
            return createdToken;
        } catch (error) {
            console.log("Error occured in creating token");
            throw({error});
        }
    }

    #verifyToken(token){
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("Error occured in validating token",error);
            throw({error});
        }
    }

    #validatePassword(userInputPassword,encryptedPassword){
        try {
            return bcrypt.compareSync(userInputPassword,encryptedPassword);
        } catch (error) {
            console.log("Error occured in validating token",error);
            throw({error});
        }
    }
}

module.exports = UserService;
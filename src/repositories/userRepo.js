const {User,Role} = require('../models/index');

class UserRepo {
    
    async create(data){
        try {
            const user = User.create(data);
            return user;
        } catch (error) {
            console.log("Error in User repo");
            throw(error);
        }
    }

    async destroy(userId){
        try {
            await User.destroy({
                where: {
                    id: userId
                }
            });
            return true;
        } catch (error) {
            console.log("Error in User repo",error);
            throw(error);
        }
    }

    async getUser(userId){
        try {
            const user = await User.findByPk(userId);
            return user;
        } catch (error) {
            console.log("Error in User repo",error);
            throw(error);
        }
    }

    async getUserByEmail(email){
        try {
            const user = await User.findOne({
                where:{
                    email : email
                }
            });
            return user;
        } catch (error) {
            console.log("Error in User repo",error);
            throw(error);
        }
    }

    async isAdmin(userId){
        try {
            const user = await User.findByPk(userId);
            const adminRole = await Role.findOne({
                where:{
                    name: 'ADMIN'
                }
            });
            return user.hasRole(adminRole);
        } catch (error) {
            console.log("Error in User repo",error);
            throw(error);
        }
    }
}

module.exports = UserRepo;
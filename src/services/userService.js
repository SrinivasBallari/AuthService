const UserRepo = require('../repositories/userRepo');

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
}

module.exports = UserService;
const {User} = require('../models/index');

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
            console.log(userId);
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
}

module.exports = UserRepo;
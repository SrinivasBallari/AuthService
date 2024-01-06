const UserService = require('../services/userService');
const userService = new UserService();

const create = async (req, res) => { 
    try {
        const user = await userService.create(req.body);
        res.status(201).json({
            message : "success",
            data : user,
            err: {}
        });
    } catch (error) {
        console.log("Error in user-controller");
        res.status(500).json({
            message : "failed",
            data : {},
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await userService.destroy(req.query.id);
        res.status(201).json({
            message : "success",
            data : response,
            err: {}
        });
    } catch (error) {
        console.log("Error in user-controller");
        res.status(500).json({
            message : "failed",
            data : {},
            err: error
        });
    }
}

const signIn = async (req, res) => {
    try {
        const response = await userService.signIn(req.body.email, req.body.password);
        res.status(200).json({
            message: "successfully signed-in",
            data: response,
            err: {}
        });
    } catch (error) {
        console.log("Error in user-controller");
        res.status(500).json({
            message : "failed",
            data : {},
            err: error
        });
    }
}

module.exports = {
    create, 
    destroy,
    signIn
}
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

const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['access-token-key'];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            message: "User authenticated and token is valid",
            data: response,
            err: {}
        });
    } catch (error) {
        console.log("Error in user-controller");
        return res.status(500).json({
            message : "failed",
            data : {},
            err: error
        }); 
    }
}

const isAdmin = async (req, res) => {
    try {
        const response = await userService.isAdmin(req.body.id);
        return res.status(200).json({
            message: "successfully fetched whether user role is admin or not",
            data: response,
            err: {}
        });
    } catch (error) {
        console.log("Error in user-controller");
        return res.status(500).json({
            message : "failed",
            data : {},
            err: error
        }); 
    }
}

module.exports = {
    create, 
    destroy,
    signIn,
    isAuthenticated,
    isAdmin
}
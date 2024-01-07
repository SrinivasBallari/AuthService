const validateUserAuthentication = (req, res, next) => {

    if(!req.body.email | !req.body.password){
        return res.status(400).json({
            message : "failed",
            error : "Email or Password is missing !!",
            data : {}
        });
    }
    next();
}

const validateIsAdminRequest = (req, res, next) => {
    if(!req.body.id){
        return res.status(400).json({
            message: "Something went wrong",
            data: {},
            error: 'User id not given'
        });
    }
    next();
}
module.exports = {
    validateUserAuthentication,
    validateIsAdminRequest
}
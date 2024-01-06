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

module.exports = {
    validateUserAuthentication
}
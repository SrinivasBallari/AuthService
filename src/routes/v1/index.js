const express = require('express');
const UserController = require('../../controllers/userController');
const { AuthRequestValidator } = require('../../middlewares/index');

const router = express.Router();

router.post(
    '/signup',
    AuthRequestValidator.validateUserAuthentication,
    UserController.create
);
router.post(
    '/signin',
    AuthRequestValidator.validateUserAuthentication,
    UserController.signIn
);
router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
);

router.get(
    '/isAdmin',
    AuthRequestValidator.validateIsAdminRequest,
    UserController.isAdmin,
);

router.delete('/user',UserController.destroy);

module.exports = router;
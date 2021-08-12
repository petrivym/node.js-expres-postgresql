const router = require('express').Router();
const { usersControllers } = require('../controllers');
const { userMiddleware } = require('../middleware');


router.post('/', userMiddleware.checkValidUserCreat, usersControllers.crateUser);

router.use('/:id',userMiddleware.checkIsPresent, userMiddleware.checkToken());

router.get('/:id', usersControllers.getUserById);
router.put('/:id',userMiddleware.checkValidUpdateUser, usersControllers.updateUser);

module.exports = router;

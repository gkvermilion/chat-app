const Router = require('express')
const authController = require('../../controllers/authController')
const authRouter = new Router()

authRouter.post("/authenticate", authController.authenticate);

module.exports = authRouter
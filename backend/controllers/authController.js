const authService = require('../services/authService')

class AuthController {
    async authenticate(req, res) {
        const { username } = req.body;
        try {
            const r = await authService.authenticate(username);
            return res.status(r.status).json(r.data);
        } catch (e) {
            return res.status(e.response.status).json(e.response.data);
        }
    }
}

module.exports = new AuthController()
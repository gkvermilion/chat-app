const axios = require('axios')

class AuthService {
    async authenticate(username) {
        const r = axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "Private-Key": process.env.PRIVATE_KEY } }
        );
        return r;
    }
}

module.exports = new AuthService()
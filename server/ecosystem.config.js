// ecosystem.config.js
const os = require('os');
module.exports = {
    apps: [{
        port        : 2567,
        name        : "colyseus",
        script      : "npm start", // your entrypoint file
        watch       : true,           // optional
        instances   : 2,
        exec_mode   : 'fork',         // IMPORTANT: do not use cluster mode.
        env: {
            DEBUG: "colyseus:errors",
            NODE_ENV: "production",
        }
    }]
}

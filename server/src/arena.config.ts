import Arena from "/home/lahirup/Desktop/Colyseus/colyseus/packages/arena/build";

/**
 * Import your Room files
 */
import { MyRoom } from "./rooms/MyRoom";
import {RedisPresence} from "@colyseus/redis-presence";
import {RedisDriver} from "@colyseus/redis-driver";
import {monitor} from "@colyseus/monitor";

export default Arena({
    getId: () => "Your Colyseus App",

    options: {
        presence: new RedisPresence(),
        driver: new RedisDriver()
    },

    initializeGameServer: (gameServer) => {

        /**
         * Define your room handlers:
         */

        gameServer.define('my_room', MyRoom);

    },

    initializeExpress: (app) => {
        /**
         * Bind your custom express routes here:
         */
        app.get("/", (req, res) => {
            res.send("It's time to kick ass and chew bubblegum!");
        });

        /**
         * Bind @colyseus/monitor
         * It is recommended to protect this route with a password.
         * Read more: https://docs.colyseus.io/tools/monitor/
         */
        app.use("/monitor", monitor());
    },


    beforeListen: () => {
        /**
         * Before before gameServer.listen() is called.
         */
    }
});

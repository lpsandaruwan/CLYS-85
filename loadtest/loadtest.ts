import { Options } from "@colyseus/loadtest";
import { Client, Room } from "colyseus.js";

export async function main(options: Options) {
    const client = new Client(options.endpoint);
    const room: Room = await client.joinOrCreate(options.roomName, options.requestJoinOptions);

    room.send('up', {"msg": room.sessionId});

    room.onMessage('*', (payload) => {
        // logic
        console.log(payload);
    });

    room.onLeave((code) => {
        // logic
    });

   // await room.leave(true);
}

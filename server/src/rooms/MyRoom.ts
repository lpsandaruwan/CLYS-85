import { Room, Client } from "@colyseus/core";
import {MyRoomState, RoomMap} from "./schema/MyRoomState";

export class MyRoom extends Room<RoomMap> {

  maxClients = 2;

  onCreate (options: any) {
    this.resetAutoDisposeTimeout(30000);
    this.setState(new RoomMap());
    this.setSeatReservationTime(10000);

    this.onMessage("up", (client, message) => {
      const p = this.state.players.get(client.sessionId);
      p.mySynchronizedProperty = message["msg"];
    });

    console.log(this.presence);
  }

  onJoin (client: Client, options: any) {
    this.state.players.set(client.sessionId, new MyRoomState());
    console.log(client.sessionId, "joined!");
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}

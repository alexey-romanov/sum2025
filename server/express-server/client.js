import { f } from "./client2.js";

export function logSmth() {
  console.log("ABC");
  console.log(f());
}

export function openWebsocketCommunication() {
  let socket = new WebSocket("ws://localhost:8002");
  let messageIndex = 0;

  socket.onopen = (e) => {
    console.log("Connection established");
    socket.send("Hello from client!");
  };

  socket.onmessage = (event) => {
    console.log(`message received: ${event.data}`);
    setTimeout(()=>{
        socket.send(`Hi again from  client! ${messageIndex}`);
        messageIndex++;
    }, 1000)
  };
}

setTimeout(() => {
  openWebsocketCommunication();
}, 1000);

import { io } from "socket.io-client";

async function main() {
    const socket = io();

    socket.on("connect", () => {
        console.log(socket.id);
        socket.emit("messageToServer", `Hello`);
        socket.on("messageFromServer", function (msg) {
            // let tag = document.getElementById("id2");
            console.log(msg);
            // let before = tag.value + "\n";
            // console.log(`${socket.id} received message ${msg}`);
            // tag.value = before + msg;
            // tag.scrollTop = tag.scrollHeight;
        });
    });

    socket.on("disconnect", () => {
        console.log(socket.id); // undefined
    });
}

window.addEventListener("load", () => {
    main();
});
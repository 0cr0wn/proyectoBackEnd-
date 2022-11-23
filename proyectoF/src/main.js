
import server from "./services/server.js"


const port = 8080;

;
server.listen(port, () => console.log(`Server up port ${port}`));

server.on("error", (error) => {
    console.log("Server catch!", error);
});


const server = require('./services/server')

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`Server Up port: ${PORT}`);
})


server.on("error", (error) => {
    console.log("Catch de error en servidor!", error);
});
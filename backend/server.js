const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
const socket = require("socket.io");

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 8080;
//connection data base

const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("DATABASE connected");
  });
//runnig server
const server = app.listen(8080, () =>
  console.log("server is running on ", port)
);

//Socket IO

const io = socket(server);
/* io.on("test", socket => {
  console.log("helllo");
}); */

io.on("connection", socket => {
  console.log("socket  connected --------------", socket.id);
  let noficationData = "";
  socket.on("getNotification", data => {
    console.log("data received from dashbord", data);
    noficationData = data;
    socket.broadcast.emit("getNotification", noficationData);
    console.log(noficationData);
  });
  socket.on("send message", message => {
    console.log("message received from dashbord", message);
    socket.broadcast.emit("receive message", message);
  });

  socket.on("check profile", (checked, id) => {
    socket.broadcast.emit("check", checked, id);
  });

  socket.on("disconnect", () => console.log("Client  disconnected"));
});

/* let connections = [];
io.on("connection", socket => {
  console.log("socket connected", socket.id);
  connections.push(socket);
  console.log("connected ", connections.length);

  //deconnection
  /* socket.on("disconnect", () => {
    connections = [];
    console.log("Client  disconnected");
  }); 
}); */

io.on("disconnect", () => {
  connections = [];
  console.log("Client  disconnected");
});

import { app } from "./app";
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);
app.listen(port, () => console.log("Server is running! Port.: " + port));

function normalizePort(val: string) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

// const cPort = 3000;
// const cHost = "0.0.0.0";
// app.listen(cPort);
// console.log(`Running on http://${cHost}:${cPort}`);

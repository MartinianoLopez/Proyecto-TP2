import express from "express";
import 'dotenv/config';
import routes from "./routes/routes.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";
import roleSeed from "./seed/roleSeed.js";
import userSeed from "./seed/userSeed.js";
import peliculasSeed from "./seed/peliculasSeed.js";
import resenasSeed from "./seed/resenasSeed.js";
import "./models/index.js";



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/app", routes);

app.use((req, res, next) => {
  res.status(404).send({
    success: false,
    message: "not found",
  });
});


await connection.sync({ force: true });

await roleSeed()
await userSeed()
await peliculasSeed()
await resenasSeed()

app.listen(SERVER_PORT, () => {
  console.log(`🚀 ~ app.listen ~ localhost:${SERVER_PORT}`);
});
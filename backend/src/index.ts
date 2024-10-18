import express from "express";
import cors from "cors";
import router from "./route/";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`This app is now running on port: ${port}.`);
});

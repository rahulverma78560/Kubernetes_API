import express from "express";
import dotenv from "dotenv";
import routerMiddleware from "./routes/routes";

const app = express();
const jsonParserMiddleware = express.json();

dotenv.config();
app.use(jsonParserMiddleware);
app.use(routerMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});

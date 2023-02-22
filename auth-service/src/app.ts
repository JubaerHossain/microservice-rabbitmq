import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { notFound, errorHandler} from "./middlewares/errorHandler";
import { dbConnect } from "./config/dbConnect";
import { AuthRoutes } from "./routes/auth.routes";

dotenv.config()



const port = process.env.PORT || 3000;


const app = express();

dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/auth", AuthRoutes);


app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Auth service listening at http://localhost:${port}`);
});
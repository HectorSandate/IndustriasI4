import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoute from "./routes/auth.route.js";
import productRoute from "./routes/product.route.js";
import supplierRoute from "./routes/supplier.route.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173', // Aquí permites las solicitudes de este origen
  optionsSuccessStatus: 200 // Algunos navegadores antiguos (IE11, varios SmartTVs) no manejan 204
}))

app.get("/", (req, res) => {
  const cookies = req.cookies;
  res.send(cookies);
});
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/suppliers", supplierRoute);

export default app;

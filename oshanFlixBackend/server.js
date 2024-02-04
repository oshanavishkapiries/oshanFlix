import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Rouets from "./routers/index.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigin = process.env.AUTH_CLIENT_DOMAIN;


//middleware
app.use(cors({
    origin: allowedOrigin,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/api/v1/", Rouets);

app.get("*", (req, res) => {
    res.send("oshanFlix Server Api : is running on port " + PORT);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

import express from "express";
const router = express.Router();

// Controllers
import Main from "./controllers/main.js";


// Routes
router.route("/").get(Main.indexRoute);
router.route("/:type/:id").get(Main.getDetails);




export default router

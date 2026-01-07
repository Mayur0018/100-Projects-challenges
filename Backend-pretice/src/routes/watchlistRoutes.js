import express from "express";
const router = express.Router();
import {register,login,logout} from "../controllers/authControllers.js"
router.post("/",addToWatchlist);
router.post("/login",login)
router.post("/logout",logout)
export default router;
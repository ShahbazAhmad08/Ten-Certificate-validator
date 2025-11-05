import express from "express"
import { getDetails } from "../controllers/User.js";
const router = express.Router();


router.post("/getdetails", getDetails);

export default router;
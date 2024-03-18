import  express  from "express";
import { sendReservation } from "../controlers/reservation.js";

const router=express.Router();

router.post("/send",sendReservation);

export default router;
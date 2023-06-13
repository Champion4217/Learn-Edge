import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  buySubscription,
  cancelSubscription,
  getRazorPayKey,
  paymentVerification,
} from "../controllers/PaymentController.js";

const router = express.Router();

//Buy Subscription

router.route("/subscribe").get(isAuthenticated, buySubscription);

// Payment Verification And save reference in database
router.route("/paymentverification").get(isAuthenticated, paymentVerification);

//Get Razorpay Key
router.route("/razorpaykey").get(getRazorPayKey);

//Cancel Subscription
router.route("/subscribe/cancel").delete(isAuthenticated,cancelSubscription)

export default router;

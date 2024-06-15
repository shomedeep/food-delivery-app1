import express, { Request, Response, NextFunction } from "express";
import {
  CustomerLogin,
  CustomerSignup,
  CustomerVerify,
  EditCustomerProfile,
  GetCustomerProfile,
  RequestOtp,
} from "../controllers";
import { Authenticate } from "../middlewares";

const router = express.Router();

/** ------------- Signup / Create customer -------- **/
router.post("/signup", CustomerSignup);

/** ------------ Login -------- **/
router.post("/login", CustomerLogin);

// Authentication
router.use(Authenticate);

/** ------------- Verify Customer account -------- **/
router.patch("/verify", CustomerVerify);

/** ------------- OTP / Requesting OTP -------- **/
router.get("/otp", RequestOtp);

/** ------------- Profile -------- **/
router.get("/profile", GetCustomerProfile);

router.patch("/profile", EditCustomerProfile);

// Cart
// Order
// Payment
export { router as CustomerRoute };

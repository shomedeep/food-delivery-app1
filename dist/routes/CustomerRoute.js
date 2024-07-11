"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoute = void 0;
var express_1 = __importDefault(require("express"));
var controllers_1 = require("../controllers");
var middlewares_1 = require("../middlewares");
var router = express_1.default.Router();
exports.CustomerRoute = router;
/** ------------- Signup / Create customer -------- **/
router.post("/signup", controllers_1.CustomerSignup);
/** ------------ Login -------- **/
router.post("/login", controllers_1.CustomerLogin);
// Authentication
router.use(middlewares_1.Authenticate);
/** ------------- Verify Customer account -------- **/
router.patch("/verify", controllers_1.CustomerVerify);
/** ------------- OTP / Requesting OTP -------- **/
router.get("/otp", controllers_1.RequestOtp);
/** ------------- Profile -------- **/
router.get("/profile", controllers_1.GetCustomerProfile);
router.patch("/profile", controllers_1.EditCustomerProfile);
//# sourceMappingURL=CustomerRoute.js.map
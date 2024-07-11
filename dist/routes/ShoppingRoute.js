"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingRoute = void 0;
var express_1 = __importDefault(require("express"));
var controllers_1 = require("../controllers");
var router = express_1.default.Router();
exports.ShoppingRoute = router;
/** -------------Food Availability-------- **/
router.get("/:pincode", controllers_1.GetFoodAvailability);
/** -------------Top Restaurants-------- **/
router.get("/top-restaurants/:pincode", controllers_1.GetTopRestaurants);
/** -------------Foods Available in 30 minutes-------- **/
router.get("/foods-in-30-min/:pincode", controllers_1.GetFoodsIn30Min);
/** -------------Search Foods-------- **/
router.get("/search/:pincode", controllers_1.SearchFoods);
/** -------------Find Restraurant by ID-------- **/
router.get("/restaurants/:id", controllers_1.RestaurantById);
//# sourceMappingURL=ShoppingRoute.js.map
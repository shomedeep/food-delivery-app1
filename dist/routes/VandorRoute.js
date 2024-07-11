"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VandorRoute = void 0;
var express_1 = __importDefault(require("express"));
var controllers_1 = require("../controllers");
var middlewares_1 = require("../middlewares");
var multer_1 = __importDefault(require("multer"));
var imageStorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "images");
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + "_" + file.originalname);
    },
});
var images = (0, multer_1.default)({ storage: imageStorage }).array("images", 10);
console.log(images, "route image");
var router = express_1.default.Router();
exports.VandorRoute = router;
router.post("/login", controllers_1.VandorLogin);
router.get("/profile", middlewares_1.Authenticate, controllers_1.GetVandorProfile);
router.patch("/profile", middlewares_1.Authenticate, controllers_1.UpdateVandorProfile);
router.patch("/coverimage", middlewares_1.Authenticate, images, controllers_1.UpdateVandorCoverImage);
router.patch("/service", middlewares_1.Authenticate, controllers_1.UpdateVandorService);
router.post("/food", middlewares_1.Authenticate, images, controllers_1.AddFood);
router.get("/foods", middlewares_1.Authenticate, controllers_1.GetFood);
router.get("/", function (req, res, next) {
    res.json({ message: "Hello from vandor " });
});
//# sourceMappingURL=VandorRoute.js.map
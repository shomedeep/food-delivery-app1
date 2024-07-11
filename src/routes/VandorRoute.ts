import express, { Request, Response, NextFunction } from "express";
import {
  AddFood,
  GetFood,
  GetVandorProfile,
  UpdateVandorCoverImage,
  UpdateVandorProfile,
  UpdateVandorService,
  VandorLogin,
} from "../controllers";
import { Authenticate } from "../middlewares";
import multer from "multer";

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + "_" + file.originalname);
  },
});

const images = multer({ storage: imageStorage }).array("images", 10);
console.log(images, "route image");

const router = express.Router();

router.post("/login", VandorLogin);

router.get("/profile", Authenticate, GetVandorProfile);
router.patch("/profile", Authenticate, UpdateVandorProfile);
router.patch("/coverimage", Authenticate, images, UpdateVandorCoverImage);
router.patch("/service", Authenticate, UpdateVandorService);

router.post("/food", Authenticate, images, AddFood);
router.get("/foods", Authenticate, GetFood);

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello from vandor " });
});

export { router as VandorRoute };

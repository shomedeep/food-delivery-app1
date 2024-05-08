import { Request, Response, NextFunction } from "express";
import { CreateVandorInput } from "../dto";
import { Vandor } from "../models";
import { GenerateSalt, GeneratePassword } from "../utility";

export const CreateVandor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    name,
    address,
    pincode,
    foodType,
    email,
    password,
    ownerName,
    phone,
  } = <CreateVandorInput>req.body;

  const existingVandor = await Vandor.findOne({ email: email });

  if (existingVandor !== null) {
    return res.status(409).json({
      message: "Vandor already exists with provided email id",
    });
  }

  //   generate a salt
  const salt = await GenerateSalt();

  // encrypt the password usign the salt
  const usePassword = await GeneratePassword(password, salt);

  const createdVandor = await Vandor.create({
    name: name,
    address: address,
    pincode: pincode,
    foodType: foodType,
    email: email,
    password: usePassword,
    salt: salt,
    ownerName: ownerName,
    phone: phone,
    rating: 0,
    serviceAvailable: false,
    coverImages: [],
  });
  res.json(createdVandor);
};

export const GetVandors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const GetVandorById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

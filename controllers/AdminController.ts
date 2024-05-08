import { Request, Response, NextFunction } from "express";
import { CreateVandorInput } from "../dto";
import { Vandor } from "../models";
import { GenerateSalt, GeneratePassword } from "../utility";

export const FindVandor = async (id: string | undefined, email?: string) => {
  return email
    ? await Vandor.findOne({ email: email })
    : await Vandor.findById(id);
};

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

  const existingVandor = await FindVandor("", email);

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
) => {
  const vandors = await Vandor.find();

  if (vandors !== null) {
    return res.json({ count: vandors.length, data: vandors });
  }
  res.status(404).json({ message: "vandors data not found" });
};

export const GetVandorById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const vandorId = req.params.id;
  const vandor = await FindVandor(vandorId);

  if (vandor !== null) {
    return res.json(vandor);
  }
  return res.status(404).json({ message: "vandor data not found" });
};

import express, { Application } from "express";
import path from "path";

import { AdminRoute, VandorRoute, CustomerRoute } from "../routes";
import { ShoppingRoute } from "../routes/ShoppingRoute";

export default async (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/images", express.static(path.join(__dirname, "images")));

  app.use("/admin", AdminRoute);
  app.use("/vandor", VandorRoute);
  app.use("/shopping", ShoppingRoute);
  app.use("/customer", CustomerRoute);

  return app;
};

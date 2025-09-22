import { Router } from "express";
import authRouter from "../user/auth/auth";
import categoryRouter from "../user/categoryRoutes";
import brandRouter from "../user/brandRoutes";

const route = Router();


route.use("/auth", authRouter);
route.use("/category", categoryRouter);
route.use("/brand", brandRouter);


export default route;
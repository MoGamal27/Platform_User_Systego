import { Router } from "express";
import authRouter from "../user/auth/auth";
import categoryRouter from "../user/categoryRoutes";
import brandRouter from "../user/brandRoutes";
import productRouter from '../user/productRoutes';
import cartRouter from '../user/cartRoutes';
import orderRouter from '../user/orderRoutes';
import wishlistRouter from '../user/wishlistRoutes'

const route = Router();


route.use("/auth", authRouter);
route.use("/category", categoryRouter);
route.use("/brand", brandRouter);
route.use("/product", productRouter);
route.use("/cart", cartRouter);
route.use("/order", orderRouter);
route.use("/wishlist", wishlistRouter)

export default route;
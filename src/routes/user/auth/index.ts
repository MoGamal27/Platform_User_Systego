import { Router } from 'express';
import googleAuth from "./google";
const route = Router();


route.use('/google',googleAuth)

export default route;
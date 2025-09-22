import { Router } from 'express';
import { signup, login, editProfile} from '../../../controller/users/auth';
import { validate } from '../../../middlewares/validation';
import { authenticated } from '../../../middlewares/authenticated';

import {loginSchema, signupSchema} from '../../../validation/user/auth';

const route = Router();

route.post("/signup", validate(signupSchema), signup);
route.post("/login", validate(loginSchema), login);
route.put("/edit-profile/:id", authenticated, editProfile);

export default route;

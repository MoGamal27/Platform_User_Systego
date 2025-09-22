import { Router } from 'express';
import { getAllCategorys, getCategoryById} from '../../controller/users/categoryController'

const route = Router();

route.get("/", getAllCategorys);

route.get("/:id", getCategoryById);


export default route;

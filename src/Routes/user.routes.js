import { Router } from "express";
import { createUser, getUsers, getUser, updateUser, deleteUser} from "../Controller/User.controller.js";
import { isAdmin, verifyToken } from "../middlewares/authJwt.js";
import { checkExistingUser } from "../middlewares/verifySignup.js";

const router = Router();

router.post("/saveuser", createUser);
router.get("/allusers", getUsers);
router.get("/search/:idUser", getUser);
router.put("/update/:idUser", updateUser);
router.delete("/delete/:idUser", deleteUser);



export default router;

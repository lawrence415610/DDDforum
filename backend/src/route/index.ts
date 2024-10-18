import express from "express";
import { createUser, editUser, getUserByEmail } from "../controller/user";

const router = express.Router();

router.post("/users/new", createUser);
router.post("/users/edit/:userId", editUser);
router.get("/users/", getUserByEmail);

export default router;

import express from "express";
import { createUser, editUser, getUserByEmail } from "../controller/user";
import { getPopularPosts } from "../controller/post";
const router = express.Router();

router.post("/users/new", createUser);
router.post("/users/edit/:userId", editUser);
router.get("/users/", getUserByEmail);

router.get("/posts", getPopularPosts);

export default router;

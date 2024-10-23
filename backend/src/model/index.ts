import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const User = prisma.user;
const Post = prisma.post;

export { prisma, User, Post };

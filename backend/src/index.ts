import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const port = process.env.PORT || 3000;
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

function generateSimplePassword(length: number = 8): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

app.post("/users/new", async (req: Request, res: Response): Promise<any> => {
  const { email, firstName, lastName, userName } = req.body;
  const password = generateSimplePassword();
  const newUser = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      userName,
      password,
    },
  });
  return res.status(200).json({
    success: true,
    data: Object.assign({}, newUser),
  });
});

// Edit a user
app.post(
  "/users/edit/:userId",
  async (req: Request, res: Response): Promise<any> => {
    const id = req.params.userId;
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!user) {
      res.status(404).json({
        success: false,
      });
    }
    const updatedUser = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: { ...user!, ...req.body },
    });
    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  }
);

// Get a user by email
app.get("/users", async (req: Request, res: Response): Promise<any> => {
  const { email } = req.query;
  const user = await prisma.user.findUnique({
    where: {
      email: String(email),
    },
  });
  if (!user)
    return res.status(404).json({
      success: false,
    });
  const { password, ...userWithoutPassword } = user;
  res.status(200).json({
    success: true,
    data: userWithoutPassword,
  });
});

app.listen(port, () => {
  console.log(`This app is now running on port: ${port}.`);
});

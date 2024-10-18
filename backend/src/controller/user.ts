import { Request, Response } from "express";
import { User } from "../model/user";

enum Error {
  UsernameAlreadyTaken = "UsernameAlreadyTaken",
  EmailAlreadyInUse = "EmailAlreadyInUse",
  ValidationError = "ValidationError",
  ServerError = "ServerError",
  ClientError = "ClientError",
  UserNotFound = "UserNotFound",
}

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

const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, firstName, lastName, userName } = req.body;

    if (!email || !firstName || !lastName || !userName) {
      return res.status(400).json({
        success: false,
        error: Error.ValidationError,
      });
    }

    // email validation
    const hasExistedEmail = await User.findFirst({
      where: { email },
    });
    if (hasExistedEmail) {
      return res.status(409).json({
        error: Error.EmailAlreadyInUse,
        success: false,
      });
    }

    // username validation
    const hasExistedUserName = await User.findFirst({
      where: { userName },
    });
    if (hasExistedUserName) {
      return res.status(409).json({
        error: Error.UsernameAlreadyTaken,
        success: false,
      });
    }

    const password = generateSimplePassword();
    const newUser = await User.create({
      data: {
        ...req.body,
        password,
      },
    });
    const userWithoutPassword = { ...newUser, password: undefined };
    return res.status(201).json({
      success: true,
      data: userWithoutPassword,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: Error.ServerError,
    });
  }
};

const getUserByEmail = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email } = req.query;
    const user = await User.findUnique({
      where: {
        email: String(email),
      },
    });
    if (!user)
      return res.status(404).json({
        success: false,
        error: Error.UserNotFound,
      });
    const { password, ...userWithoutPassword } = user;
    res.status(200).json({
      success: true,
      data: userWithoutPassword,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: Error.ServerError,
    });
  }
};

const editUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.userId;
    const user = await User.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!user) {
      res.status(404).json({
        success: false,
        error: Error.UserNotFound,
      });
    }
    const { email, userName, firstName, lastName } = req.body;
    if (!email || !firstName || !lastName || !userName) {
      return res.status(400).json({
        success: false,
        error: Error.ValidationError,
      });
    }
    // email validation
    const hasExistedEmail = await User.findFirst({
      where: { email },
    });
    if (hasExistedEmail) {
      return res.status(409).json({
        error: Error.EmailAlreadyInUse,
        success: false,
      });
    }

    // username validation
    const hasExistedUserName = await User.findFirst({
      where: { userName },
    });
    if (hasExistedUserName) {
      return res.status(409).json({
        error: Error.UsernameAlreadyTaken,
        success: false,
      });
    }

    const updatedUser = await User.update({
      where: {
        id: Number(id),
      },
      data: { ...user!, ...req.body },
    });
    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: Error.ServerError,
      success: false,
    });
  }
};

export { createUser, getUserByEmail, editUser };

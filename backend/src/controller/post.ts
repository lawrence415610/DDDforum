import { Request, Response } from "express";
import { Error } from "../enums";
import { Post } from "../model";
const getPopularPosts = async (req: Request, res: Response): Promise<any> => {
  try {
    const { sort } = req.query;
    if (sort !== "recent") {
      return res.status(400).json({
        error: Error.ClientError,
        success: false,
      });
    }
    let posts = await Post.findMany({
      include: {
        votes: true,
        memberPostedBy: {
          include: { user: true },
        },
        comments: true,
      },
      orderBy: {
        dateCreated: "desc",
      },
    });
    return res.json({
      data: { posts },
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: Error.ServerError,
      success: false,
    });
  }
};

export { getPopularPosts };

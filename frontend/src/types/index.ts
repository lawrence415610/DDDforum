type Vote = { id: number; postId: number; voteType: "Upvote" | "Downvote" };
type User = {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
};
type Comment = {
  content: string;
};

type Post = {
  title: string;
  dateCreated: string;
  memberPostedBy: {
    user: User;
  };
  comments: Comment[];
  votes: Vote[];
};

export type { Post, Vote, User, Comment };

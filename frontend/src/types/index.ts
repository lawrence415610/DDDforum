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

type RegistrationInput = {
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
};

type ValidationResult = {
  success: boolean;
  errorMessage?: string;
};

export type { Post, Vote, User, Comment, RegistrationInput, ValidationResult };

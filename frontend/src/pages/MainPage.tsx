import { Layout } from "../components/Layout";
import { PostsViewSwitcher } from "../components/PostViewSwitcher";
import { PostsList } from "../components/PostList";
import { Post } from "../types";
export const MainPage = () => {
  const posts: Post[] = [
    {
      title: "The first Post",
      dateCreated: "2024/10/01",
      memberPostedBy: {
        user: {
          firstName: "lawrence",
          lastName: "liu",
          email: "lawrence.liu@yelinliu.com",
          userName: "lawrence",
        },
      },
      comments: [
        {
          content: "this is the new post",
        },
      ],
      votes: [
        {
          id: 1,
          postId: 1,
          voteType: "Upvote",
        },
      ],
    },
  ];

  return (
    <Layout>
      <PostsViewSwitcher />
      <PostsList posts={posts} />
    </Layout>
  );
};

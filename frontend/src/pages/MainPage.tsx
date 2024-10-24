import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { PostsViewSwitcher } from "../components/PostViewSwitcher";
import { PostsList } from "../components/PostList";
import { api } from "../apis";
import { Spinner } from "../components/Spinner";
export const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getPosts() {
    setLoading(true);
    try {
      const result = await api.getPopularPosts();
      const resultData = result.data;
      if (resultData.success) {
        setPosts(resultData.data.posts);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Layout>
      <PostsViewSwitcher />
      {loading ? <Spinner /> : <PostsList posts={posts} />}
    </Layout>
  );
};

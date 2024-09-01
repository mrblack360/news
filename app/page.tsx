"use client";
import PostPreview from "@/components/PostPreview";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [posts, setPosts] = useState<any[]>();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/news");
      const postsResponse = await response.json();
      setPosts(postsResponse?.results);
    };
    fetchPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5 py-5">
      {posts?.map((post: any) => (
        <PostPreview key={post.article_id} {...post} />
      ))}
    </div>
  );
};

export default HomePage;

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import Subscribe from "../components/subscribe/Subscribe";
import Post from "../components/posts/Post";

const Newsletter = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const otherPosts = posts.slice(4);
  const firstThreeOtherPosts = otherPosts.slice(0, 3);

  return (
    <div className="container m-auto px-5 py-2.5">
      <Subscribe />

      <div className="mt-[60px]">
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
          Resent blog posts
        </h2>
        <div className="flex flex-wrap gap-6 justify-between" data-aos = "fade-up">
          {firstThreeOtherPosts.map((post) => (
            <div
              key={post.id}
              className="w-full md:w-[48%] lg:w-[calc(90%/3)]"
            >
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

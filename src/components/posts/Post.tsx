import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import type { PostProps } from "../../types/Type";
import { categoryColors } from "../../Data";

const Post = ({ post }: PostProps) => {
  return (
    <div className="lg:col-span-6 lg:row-span-2 flex flex-col">
      <img
        src={post.mainImage}
        alt={post.title}
        className="w-full object-cover mb-4"
      />

      <p className="text-sm text-author font-weighted mb-1 dark:text-white">
        {post.author}
      </p>

      <div className="flex justify-between items-start mb-2">
        <h3 className="text-2xl font-bold text-darkText dark:text-white">
          {post.title}
        </h3>
        <Link to={`/blog/${post.id}`}>
          <MdOutlineArrowOutward className="text-[24px] text-darkText dark:text-white" />
        </Link>
      </div>

      <p className="mb-3 text-black/80 dark:text-gray-300">
        {post.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {post.categories.map((cat, i) => (
          <span
            key={i}
            className={`text-xs font-medium px-3 py-1 rounded-full ${
              categoryColors[cat] ||
              "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Post;


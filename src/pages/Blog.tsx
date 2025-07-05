import { useParams, Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import { postsData } from "../redux/postsData";
import type { Post } from "../redux/postsTypes";
import Subscribe from "../components/subscribe/Subscribe";
import { categoryColors } from "../Data";

const Blog = () => {
  const { id } = useParams();
  const postId = Number(id);

  const post: Post | undefined = postsData.find((p) => p.id === postId);

  if (!post) {
    return <div className="text-center mt-10 text-red-500">Post not found</div>;
  }

  const relatedPosts = postsData.filter(
    (p) =>
      p.id !== post.id &&
      p.categories.some((cat) => post.categories.includes(cat))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      <div className="flex flex-col md:grid md:grid-cols-[1fr_3fr] gap-8">
        <div className="space-y-6 order-1 md:order-[0]">
          <h2 className="text-xl font-semibold mb-4" data-aos="fade">
            Recent blog posts
          </h2>
          {relatedPosts.map((related) => (
            <div
              key={related.id}
              className="p-2 transition cursor-auto transition-transform duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg hover:bg-gray-50 dark:hover:bg-darkTheme/40"
              data-aos="fade-right"
            >
              <img
                src={related.mainImage}
                alt={related.title}
                className="w-full h-[264px] md:h-[204px] object-cover rounded mb-2"
              />
              <p className="text-xs text-author mb-1">Sunday, 1 Jan 2023</p>

              <div className="flex justify-between items-start">
                <h3 className="text-base font-semibold">{related.title}</h3>
                <Link to={`/blog/${related.id}`}>
                  <MdOutlineArrowOutward className="text-[20px] text-darkText dark:text-white" />
                </Link>
              </div>

              <p className="text-sm text-postsText dark:text-darker line-clamp-2 mt-1">
                {related.description.slice(0, 80)}...
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {related.categories.map((cat, index) => (
                  <span
                    key={index}
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      categoryColors[cat] ||
                      "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    }`}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-left">
          <p className="text-author text-sm mb-2">Sunday, 1 Jan 2023</p>
          <div className="flex justify-between items-center mb-4 gap-2">
            <h1 className="text-3xl font-bold">{post.title}</h1>
          </div>
          <img src={post.mainImage} alt={post.title} className="w-full mb-6" />
          <p className="text-lg mb-6 text-gray-800 dark:text-darker">
            {post.description}
          </p>
          <div className="space-y-10">
            {post.sections?.map((section, index) => (
              <div key={index} className="pt-6" data-aos="fade-up">
                <img
                  src={section.image}
                  alt={`Section ${index + 1}`}
                  className="w-full mb-4"
                />
                <div className="space-y-2 text-gray-700 dark:text-darker">
                  {Object.entries(section).map(([key, value]) => {
                    if (key !== "image") {
                      return (
                        <p key={key} className="text-base leading-relaxed">
                          {value}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mt-8">
        <Subscribe />
      </div>
    </div>
  );
};

export default Blog;

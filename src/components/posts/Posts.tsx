import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { setPosts } from "../../redux/postsSlice";
import { postsData } from "../../redux/postsData";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import Post from "./Post";
import Pagination from "../pagenation/Pagenation";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    dispatch(setPosts(postsData));
  }, [dispatch]);

  const mainPost = posts[0];
  const sidePosts = posts.slice(1, 3);
  const bottomPost = posts[3];
  const otherPosts = posts.slice(4);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = otherPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(otherPosts.length / postsPerPage);

  return (
    <section className="px-4">
      <div className="mx-auto">
        <div className="mb-16 flex justify-center flex-wrap gap-8 border-t border-b border-borderColor dark:border-gray-700">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-[72px] md:text-[160px] lg:text-[232px] font-bold text-black dark:text-white"
          >
            THE
          </h1>
          <h1
            data-aos="fade-left"
            data-aos-duration="1000"
            className="text-[72px] md:text-[160px] lg:text-[232px] font-bold  text-black dark:text-white"
          >
            BLOG
          </h1>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white my-8" data-aos="fade">
          Recent blog posts
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden">
          {mainPost && (
            <div className="lg:col-span-6 lg:row-span-2 flex flex-col" data-aos="fade-right">
              <img
                src={mainPost.mainImage}
                alt={mainPost.title}
                className="w-full object-cover mb-4"
              />
              <p className="text-sm text-author font-weighted mb-1 dark:text-white">
                {mainPost.author}
              </p>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-darkText dark:text-white">
                  {mainPost.title}
                </h3>
                <Link to={`/blog/${mainPost.id}`}>
                  <MdOutlineArrowOutward className="text-[24px] text-darkText dark:text-white" />
                </Link>
              </div>
              <p className="mb-3 text-black/80 dark:text-gray-300">
                {mainPost.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {mainPost.categories.map((cat, i) => (
                  <span
                    key={i}
                    className="text-xs bg-pink-100 text-pink-600 px-2 py-1 dark:bg-pink-900 dark:text-pink-200 rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          )}

          {sidePosts.map((post) => (
            <div
              key={post.id}
              className="lg:col-span-6 flex flex-col sm:flex-row gap-4"
              data-aos = "fade-left"
            >
              <img
                src={post.mainImage}
                alt={post.title}
                className="sm:max-w-full lg:max-w-[320px] object-cover"
              />
              <div className="flex-1 sm:w-[50%] lg:w-[50%]" data-aos = "fade-left">
                <p className="text-sm text-author font-weighted mb-1 dark:text-white">
                  {post.author}
                </p>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-md font-semibold text-darkText dark:text-white">
                    {post.title}
                  </h4>
                  <Link to={`/blog/${post.id}`}>
                    <MdOutlineArrowOutward className="text-[24px] text-darkText dark:text-white" />
                  </Link>
                </div>
                <p className="text-sm mb-2 text-black/80 dark:text-gray-300">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {post.categories.map((cat, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {bottomPost && (
            <div className="lg:col-span-12 flex justify-between flex-col lg:flex-row gap-4 mt-6">
              <img
                src={bottomPost.mainImage}
                alt={bottomPost.title}
                className="w-full lg:w-[48%] object-cover"
                data-aos = "fade-right"
              />
              <div className="w-full lg:w-[48%] flex flex-col justify-between" data-aos = "fade-left">
                <p className="text-sm text-author font-weighted mb-1 dark:text-white">
                  {bottomPost.author}
                </p>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-bold text-darkText dark:text-white">
                    {bottomPost.title}
                  </h4>
                  <Link to={`/blog/${bottomPost.id}`}>
                    <MdOutlineArrowOutward className="text-[24px] text-darkText dark:text-white" />
                  </Link>
                </div>
                <p className="mb-3 leading-6 tracking-[1px] text-black/80 dark:text-gray-300">
                  {bottomPost.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {bottomPost.categories.map((cat, i) => (
                    <span
                      key={i}
                      className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full dark:bg-green-900 dark:text-green-200"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="w-full mt-12 mb-6" data-aos= "fade">
          <h2 className="text-3xl font-bold text-black dark:text-white my-12">
            All blog posts
          </h2>
        </div>

        <div className="flex flex-wrap w-full gap-6 justify-between">
          {currentPosts.map((post) => (
            <div key={post.id} className="w-full md:w-[48%] lg:w-[calc(90%/3)]" data-aos= "fade-up">
              <Post post={post} />
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </section>
  );
};

export default Posts;

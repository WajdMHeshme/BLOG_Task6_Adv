const Subscribe = () => {
  return (
    <div className="flex justify-center text-center flex-col items-center mt-8">
      <p className="text-numpgn font-weighted">Newlatters</p>

      <h1 className="text-[48px] font-bold mt-3 mb-6  dark:text-white" data-aos="fade">
        Stories and interviews
      </h1>

      <p className="text-postsText font-[400] text-[20px] max-w-[600px] dark:text-darker" data-aos="fade" data-aos-delay= "200">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>


      <form className="flex flex-wrap gap-4 mt-10 justify-end sm:justify-center">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full dark:bg-white dark:placeholder:text-gray-500 text-gray-500   sm:w-[360px] h-[48px] rounded-[8px] px-4 py-3 border-border border-[1px] outline-0 shadow-[inset_0px_1px_2px_0px_#1018280D]"
        />
        <button
          className="text-white bg-numpgn py-3 px-5 rounded-[8px] h-[48px] cursor-pointer"
        >
          Subscribe
        </button>
      </form>


      <div className="w-full sm:w-[475px] mt-2 text-left">
        <p className="text-[14px] text-gray-500 dark:text-darker">
          We care about your data in our{" "}
          <span className="underline cursor-pointer">privacy policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Subscribe;

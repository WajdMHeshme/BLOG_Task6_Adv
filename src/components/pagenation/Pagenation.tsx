import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import type { PaginationProps } from "../../types/Type"
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-between flex-col sm:flex-row items-center my-16 gap-2 flex-wrap border-t py-8 light:border-[#EAECF057] border-[#EAECF057]">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 flex items-center gap-2   bg-transparent text-postsText   dark:text-white disabled:opacity-50 cursor-pointer"
      >
        <FaArrowLeft /> Previous
      </button>
      <div className="flex gap-3">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => onPageChange(i + 1)}
            className={`px-4 py-2 rounded-[8px]  transition-all duration-200 ${
              currentPage === i + 1
                ? "bg-pagenation text-numpgn dark:bg-white dark:text-black"
                : " text-postsText dark:bg-gray-800 dark:text-white hover:bg-pagenation hover:text-numpgn dark:hover:bg-gray-700 cursor-pointer"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1  flex items-center gap-2   bg-transparent text-postsText   dark:text-white disabled:opacity-50 cursor-pointer"
      >
        Next <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;

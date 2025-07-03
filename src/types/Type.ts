
export interface NavLinks {
    link?: string;
    label:string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface PostProps {
  post: {
    id: number;
    exData?:string;
    mainImage: string;
    title: string;
    author: string;
    description: string;
    categories: string[];
  };
}

export interface NavBarProps {
  isDark: boolean;
  toggleDark: () => void;
}

export interface FuzzyTextProps {
  children: React.ReactNode;
  fontSize?: number | string;
  fontWeight?: string | number;
  fontFamily?: string;
  color?: string;
  enableHover?: boolean;
  baseIntensity?: number;
  hoverIntensity?: number;
}
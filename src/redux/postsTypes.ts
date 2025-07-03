export interface Section {
    image: string;
    exData?: string;
    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;
    text5?: string;
    text6?: string;
    text7?: string;
    text8?: string;
    text9?: string;
}



export interface Post {
  id: number;
  author: string;
  title: string;
  description: string;
  mainImage: string;
  categories: string[];
  sections?: Section[];
}



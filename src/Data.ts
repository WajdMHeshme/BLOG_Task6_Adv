
import { type NavLinks } from "./types/Type"



export const NavData: Array<NavLinks>  = [
    {
        link: "/",
        label: "Blog",
    },
    {
        link: "projects",
        label: "Projects",
    },
    {
        link: "about",
        label: "About"
    },
        {
        link: "newsletter",
        label: "Newsletter"
    },

]

export const categoryColors: Record<string, string> = {
  Design: "bg-purple-100 text-purple-700",
  Research: "bg-blue-100 text-blue-700",
  Presentation: "bg-pink-100 text-pink-700",
  Leadership: "bg-purple-100 text-purple-700",
  Management: "bg-gray-100 text-gray-700",
  Product: "bg-cyan-100 text-cyan-700",
  Frameworks: "bg-orange-100 text-orange-700",
  "Software Development": "bg-green-100 text-green-700",
  Tools: "bg-yellow-100 text-yellow-700",
  SaaS: "bg-teal-100 text-teal-700",
  Podcasts: "bg-indigo-100 text-indigo-700",
  "Customer Success": "bg-rose-100 text-rose-700",
  Interface: "bg-lime-100 text-lime-700",
};
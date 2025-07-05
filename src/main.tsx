import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Route from "./Route";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Newsletter from "./pages/Newsletter";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import AOS from "aos";
import "aos/dist/aos.css";

import { BounceLoader } from "react-spinners";
import About from "./pages/About";

const routes = createBrowserRouter([
  {
    element: <Route />,
    path: "/",
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />

      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "blog/:id",
        element: <Blog />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
    ],
  },
  
],
  {
    basename: "/BLOG_Task6_Adv",
  }
);

function AppWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-darkTheme">
        <BounceLoader color="#fff" size={120} />
      </div>
    );
  }

  return <RouterProvider router={routes} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </StrictMode>
);

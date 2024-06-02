import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop from "./pages/Desktop";
import About from "./pages/About";
import Post from "./pages/Post";

function App() {
  const action = useNavigationType();
  console.log("🚀 ~ App ~ action:", action)
  const location = useLocation();
  const pathname = location.pathname;
  console.log("🚀 ~ App ~ pathname:", pathname)

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog/:slug" element={<Post />} />
    </Routes>
  );
}
export default App;

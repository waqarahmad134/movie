import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Post from "./pages/Post";
import Home from "./pages/Home";
import ErrorPage from "./errors/error-page";
import { ToastContainer } from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <ToastContainer />
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route errorElement={<ErrorPage />} path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog/:slug" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;

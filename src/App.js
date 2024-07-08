
import { createBrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Homepage from "./components/homepage";
import Divider from "./components/divider";
import Footer from "./components/footer";
import BlogPost from "./components/blog";
import AddBlog from "./components/addBlog";
import Delete from "./components/delete";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="bg-bgColor">
      <Header />
      {/* <Divider/> */}
      <Homepage />
      <Footer />
    </div>

  },
  {
    path: "/blog/:id",
    element: <div className="bg-bgColor">
      <Header />
      <BlogPost />
      <Footer />

    </div>
  },
  {
    path: "/addBlog",
    element: <div className="bg-bgColor">
      <Header />
      <AddBlog />
      <Footer />

    </div>
  },
  {
    path: "/deleteBlog",
    element: <div className="bg-bgColor">
      <Header />
      <Delete />
      <Footer />

    </div>
  }
]);


export default router;

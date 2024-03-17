import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Content from "./pages/Content";
import Comment from "./pages/Comment";
import ManageFiles from "./pages/ManageFiles";
import Categories from "./pages/Categories";
import Labels from "./pages/Labels";
import { useState } from "react";
import SignIn from "./pages/auth/SignIn";
import NotFound from "./pages/NotFound";

function App() {
  // const [isLogin, setIsLoging] = useState(true);
  return (
    <div className="border border-red-600 h-screen px-12 py-4 overflow-hidden ">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Content />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/manageFiles" element={<ManageFiles />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/labels" element={<Labels />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

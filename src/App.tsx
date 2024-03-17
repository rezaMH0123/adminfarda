import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Content from "./pages/Content";
import Comment from "./pages/Comment";
import ManageFiles from "./pages/ManageFiles";
import Categories from "./pages/Categories";
import Labels from "./pages/Labels";

function App() {
  return (
    <div className="border border-red-600 h-screen px-12 py-4 overflow-hidden ">
      <Layout>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/manageFiles" element={<ManageFiles />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/labels" element={<Labels />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

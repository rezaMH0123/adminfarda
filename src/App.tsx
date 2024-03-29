import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Content from "./pages/Content";
import Comment from "./pages/Comment";
import ManageFiles from "./pages/ManageFiles";
import Categories from "./pages/Categories";
import Labels from "./pages/Labels";
import SignIn from "./pages/auth/SignIn";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="h-screen  overflow-hidden ">
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          duration: 2000,
        }}
      />
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

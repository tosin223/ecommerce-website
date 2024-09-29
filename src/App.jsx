import { Routes, Route } from "react-router-dom";
import { userDatas } from "./routes/userDatas";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        {userDatas.map((data, index) => (
          <Route key={index} path={data.path} element={<data.component />} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

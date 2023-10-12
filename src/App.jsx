import { BrowserRouter } from "react-router-dom";
import Website from "./Components/Website";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Website />
    </BrowserRouter>
  );
}

export default App;

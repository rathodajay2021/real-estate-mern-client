import { BrowserRouter } from "react-router-dom";
import Website from "./Components/Website";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Website />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import Website from "./Components/Website";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Website />
    </BrowserRouter>
  );
}

export default App;

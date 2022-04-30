import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/globalStyled";
import { BrowserRouter } from "react-router-dom";
import Provider from "./provider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <Provider>
      <BrowserRouter>
        <ToastContainer theme="dark" />
        <App />
      </BrowserRouter>
    </Provider>
  </>
);

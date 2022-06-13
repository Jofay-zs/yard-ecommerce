import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewPassword from "./pages/NewPassword";
import RecoveryPassword from "./pages/RecoveryPassword";
import NotFound from "./pages/NotFound";
import MyAccount from "./pages/MyAccount";
import Register from "./pages/Register";
import SendEmail from "./pages/SendEmail";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import AppContext from "./context/AppContext";
import useInitialState from "./hooks/useInitialState";
import "./styles/global.scss";

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="new-password" element={<NewPassword />} />
            <Route path="recovery-password" element={<RecoveryPassword />} />
            <Route path="send-email" element={<SendEmail />} />
            <Route path="account" element={<MyAccount />} />
            <Route path="register" element={<Register />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;

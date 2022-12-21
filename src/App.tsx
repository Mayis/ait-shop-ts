import { BrowserRouter, Route, Routes } from "react-router-dom";

import BasketPage from "./pages/BasketPage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { Provider } from "react-redux";
import RegisterPage from "./pages/RegisterPage";
import SelectedCategoryPage from "./pages/SelectedCategoryPage";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/auth">
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
          </Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/category" element={<SelectedCategoryPage />}>
            <Route path=":categoryId" element={<SelectedCategoryPage />} />
          </Route>
          <Route path="/basket" element={<BasketPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

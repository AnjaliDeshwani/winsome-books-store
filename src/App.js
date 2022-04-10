import "./App.css";
import "./responsive.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import {
  Home,
  ProductList,
  Wishlist,
  Cart,
  Login,
  SignUp,
  PageNotFound,
  Profile,
} from "./pages";
import { Header, Footer } from "./components";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mock" element={<Mockman />} />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <PrivateRoute>
                <Wishlist />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

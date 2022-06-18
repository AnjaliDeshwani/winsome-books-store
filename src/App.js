import "./App.css";
import "./responsive.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
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
  SingleProduct,
} from "./pages";
import { Header, Footer } from "./components";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { ResetScroll } from "./components";
function App() {
  return (
    <>
      <div className="app-container">
        <Toaster
          position="top-right"
          reverseOrder={false}
          containerStyle={{
            top: "4rem",
          }}
        />
        <Header />
        <ResetScroll>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/mock" element={<Mockman />} />
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="/singleProduct/:productId"
              element={<SingleProduct />}
            />
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
        </ResetScroll>
        <Footer />
      </div>
    </>
  );
}

export default App;

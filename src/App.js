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
  Checkout,
  OrderDetails,
  OrderSummary,
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
            <Route path="/mock" element={<Mockman />} />
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="/singleProduct/:productId"
              element={<SingleProduct />}
            />
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-details" element={<OrderDetails />} />
              <Route
                path="/order-summary/:orderId"
                element={<OrderSummary />}
              />
            </Route>
          </Routes>
        </ResetScroll>
        <Footer />
      </div>
    </>
  );
}

export default App;

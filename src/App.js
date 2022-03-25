import "./App.css";
import { Home, ProductList, Wishlist, Cart, Login, SignUp } from "./pages";
import { Header, Footer } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

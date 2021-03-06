import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useProduct } from "../../context/product-context";
import { useAuth } from "../../context/auth-context";
import { useOrder } from "../../context/order-context";
import {
  totalPrice,
  totalDiscount,
  totalAmount,
  clearCart,
  addOrders,
} from "../../utils";

export const OrderDetails = () => {
  const { productState, productDispatch } = useProduct();
  const { orderDispatch } = useOrder();
  const { cart } = productState;
  const { loginUser: user, token } = useAuth();
  const navigate = useNavigate();

  const price = totalPrice(cart);
  const discount = totalDiscount(cart);
  const grandTotal = totalAmount(cart);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load, check your connection");
      return;
    }
    const options = {
      key: "rzp_test_kjgU84fmtvBu4U",
      amount: grandTotal * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Winsome Books",
      description: "Thank you for shopping with us",
      handler: async function (response) {
        const order_id = uuid().toString().split(" - ")[0];
        const orderData = {
          products: [...cart],
          amount: price,
          paymentId: response.razorpay_payment_id,
          orderId: order_id,
        };

        try {
          const { status } = await addOrders(orderData, token, orderDispatch);
          if (status === 201) {
            clearCart(cart, productDispatch, token);
            navigate(`/order-summary/${orderData.orderId}`);
          }
        } catch (error) {
          console.error(error);
        }
      },

      prefill: {
        name: `${user.firstName} ${user.lastName}`,
        email: `${user.email}`,
        contact: "8441929231",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(() => {
    cart.length === 0 && navigate("/cart");
  }, [cart, navigate]);

  return (
    <div className="order-section">
      <div className="order-summary order-col">
        <h3>Order Summary</h3>
        <div className="order-content">
          <div className="order-heading order-item">
            <span className="font-bold">Item</span>
            <span className="font-bold">Qty</span>
          </div>
          {cart.map((product) => {
            const { title, qty } = product;
            return (
              <div className="order-item">
                <span>{title}</span>
                <span>{qty}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-bottom"></div>
      <div className="price-details order-col">
        <h3>Price Details</h3>
        <div className="price-content">
          <div className="price-item">
            <span>Total Price ({cart.length} items)</span>
            <span>???{price}</span>
          </div>
          <div className="price-item">
            <span>Total Discount</span>
            <span>??? ???{discount}</span>
          </div>
          <div className="price-item">
            <span>Delivery Charges</span>
            <span>FREE</span>
          </div>
          <div className="price-item">
            <span className="font-bold">Grand Total</span>
            <span className="font-bold">???{grandTotal}</span>
          </div>
        </div>
      </div>
      <button
        className="order-button btn primary-btn-solid font-bold"
        onClick={displayRazorpay}
      >
        Place Order
      </button>
    </div>
  );
};

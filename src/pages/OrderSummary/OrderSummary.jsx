import "./OrderSummary.css";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { particles } from "../../utils";
import { useOrder } from "../../context/order-context.js";

export const OrderSummary = () => {
  const {
    orderState: { orders },
  } = useOrder();

  const { orderId } = useParams();

  const order = orders.find((order) => order.orderId === orderId);

  const { paymentId, amount, products } = order || "";

  useEffect(() => {
    order && particles();
  }, []);

  return (
    <div className="order-summary-section">
      {!order ? (
        <div className="empty-order">
          {" "}
          <h3 className="empty-info">Oops! We lost your order :(</h3>{" "}
          <Link
            className="btn primary-btn-solid text-center"
            to="/product-list"
          >
            Shop Now
          </Link>{" "}
        </div>
      ) : (
        <>
          {" "}
          <h3 className="fs-1-5">Your order is placed successfully!</h3>
          <div className="order-info">
            <div className="payment-info">
              <span className="font-bold fs-1-25">Order Confirmed</span>

              <div className="details">
                <div>
                  <span className="font-bold mr-0-5">Payment Id:</span>
                  <span>{paymentId}</span>
                </div>
                <div>
                  <span className="font-bold mr-0-5">Order ID:</span>
                  <span>{orderId}</span>
                </div>
                <div>
                  <span className="font-bold mr-0-5">Amount Paid:</span>
                  <span>{amount}</span>
                </div>
              </div>
            </div>
            <div className="product-info">
              <span className="font-bold fs-1-25">Products Ordered</span>
              <div className="products-div">
                {products?.map((product) => {
                  const { img, price, title, qty } = product;
                  return (
                    <div className="single-product">
                      <img src={img} className="product-img" />
                      <div className="single-product-right">
                        <div>{title}</div>
                        <div className="product-item">
                          <span className="font-bold">Price:</span>
                          <span>{price}</span>
                        </div>
                        <div className="product-item">
                          <span className="font-bold">Qty:</span>
                          <span>{qty}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

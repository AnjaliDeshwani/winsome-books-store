export const PriceDetail = () => {
  return (
    <div className="price-detail-section">
      <div className="price-detail-header">
        <h4 className="text-grey">Price Details</h4>
      </div>
      <div className="border-bottom"></div>
      <div className="price-deatil-body">
        <div className="price-div">
          <div className="items-price">
            <div className="left-deatil">Price (2 items)</div>
            <div className="right-detai">₹1,149</div>
          </div>
          <div className="items-discount">
            <div className="left-deatil">Discount</div>
            <div className="right-detai">− ₹581</div>
          </div>
          <div className="items-delivery">
            <div className="left-deatil">Delivery Charges</div>
            <div className="right-detai">₹48</div>
          </div>
        </div>

        <div className="total-price-div">
          <div className="total-amt font-semibold">
            <div className="left-deatil">Total Amount</div>
            <div className="right-detai">₹616</div>
          </div>
        </div>
      </div>
      <div className="price-detail-footer">
        <div className="footer-note font-semibold">
          You will save ₹533 on this order
        </div>
      </div>
    </div>
  );
};

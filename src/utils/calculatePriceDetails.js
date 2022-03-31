const totalPrice = (cart) => {
  return cart.reduce((total, curr) => total + Number(curr.price) * curr.qty, 0);
};

const totalDiscount = (cart) => {
  return cart.reduce(
    (total, curr) =>
      total + (Number(curr.price) - Number(curr.discountedPrice)) * curr.qty,
    0
  );
};

const totalAmount = (cart) => {
  return cart.reduce(
    (total, curr) => total + Number(curr.discountedPrice) * curr.qty,
    0
  );
};

export { totalPrice, totalDiscount, totalAmount };

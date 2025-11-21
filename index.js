function priceCheck(price) {
  if (price == 1.50) {
    return "match";
  }
  return "";
}

function strictPriceCheck(price) {
  if (price === 1.50) {
    return "match";
  }
  return "";

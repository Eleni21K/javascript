var orderCount = 0;
function takeOrder(topping, crustType) {
  orderCount  = orderCount + 1;
  console.log('Order: ' + crustType +' pizza topped with ' + topping);
}

function getSubTotal(itemCount) {
  return itemCount*7.5;
}

function getTax(){
  return (getSubTotal(orderCount)*0.06);
}

function getTotal(){
  return (getTax() + getSubTotal(orderCount));
}

takeOrder('olives', 'thin crust');
takeOrder('tomatoes', 'spicy crust');
takeOrder('vegan cheese', 'thick crust');

console.log(getSubTotal(orderCount));
console.log(getTotal());

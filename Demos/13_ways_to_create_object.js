//2. Using "new Object()" -> This is Less efficient than object literal

var cart = new Object();

cart.shampoo = 1;
cart.hairoil = 0;
cart.hat=2;

console.log(cart);

delete cart.hairoil;

console.log(cart);

//1. Object Literal

var person = {
    id: 1,
    name: "Brendan"
};

console.log(person);

var cart = { };

cart.shampoo = 1;
cart.hairoil = 0;
cart.hat=2;

console.log(cart);

delete cart.hairoil;

console.log(cart);

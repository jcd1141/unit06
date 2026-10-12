//IT 505
//Joshua Dalton

interface Product { //define each product
    name: string;
    price: number;
}

let cart: Product[] = []; //empty cart

function addItems(...items: Product[]) { //rest parameter to accept multiple products
    cart.push(...items);
}

function showCart() { //displays the cart
    cart.forEach((item) => {
        console.log(item.name + ": $" + item.price);
    });
}

function getTotal(): number {
    let total = 0;

    cart.forEach((item) => {
        total += item.price;
    });

    return total;
}

const discount = (total: number): number => {
    return total * 0.9;
};
 
function checkout(callback: (total: number) => number) { //callback function to apply discount
    const total = getTotal();

    console.log("Total: $" + total);
    console.log("With Discount: $" + callback(total));
}

addItems(
    {name: "Football", price: 25},
    {name: "Jersey", price: 80},
    {name: "Hat", price: 20}
);

console.log("Shopping Cart:");
showCart();

checkout(discount);
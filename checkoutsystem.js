function calculateFinalPrice(cartitems, membershiptier) {
    let total = 0;

    for (let i = 0; i < cartitems.length; i++) {
        total = total + cartitems[i];
    }

    if (membershiptier === "gold") {
        total = total * 0.8;
    } else if (membershiptier === "silver") {
        total = total * 0.9;
    }

    if (total > 100) {
        total = total - 15;
    }

    return total;
}

console.log(calculateFinalPrice([30, 40, 50], "gold"));
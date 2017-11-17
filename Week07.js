var total = [];

function reset(form1, form2) {
    document.getElementById(form1).reset();
    document.getElementById(form2).reset();
}

function addToCart(form, input, price) {
    if (/\d+/.test(document.getElementById(input).value)) {
    total.push(document.getElementById(input).value * price);
    document.getElementById(form).reset();
    updateTotal();
    }
}

function updateTotal() {
    document.getElementById('total').innerHTML = addTotal();
}

function addTotal() {
    var sum = 0;
    for(i = 0; i < total.length; i++){
        sum = sum + Number(total[i]);
    }
    return sum;
}

function emptyCart() {
    total = [];
    updateTotal();
}
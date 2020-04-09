

function pizza() {
    let pizzaToppings = ['Cheese','Pepperoni','Garlic','Peppers','Pinapple'];
    let toppings = pizzaToppings.join(' and ');
    
    return ('A delicious pizza with ' + toppings + '.');
}


console.log(pizza());
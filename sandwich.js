
 let slicesOfBread = 20;
 let slicesOfCheese = 3;
 let sandwiches;

switch (slicesOfBread, slicesOfCheese){
	case((slicesOfBread > 1) && (slicesOfCheese > 0) && (slicesOfCheese < sandwiches)) :
		sandwiches = slicesOfCheese;
		console.log(sandwiches);
        break;
	case((slicesOfCheese >= sandwiches) && (slicesOfBread > 1)): 
		console.log(sandwiches);
        break;
	default: ((slicesOfCheese = 0) || (slicesOfBread < 2)) 
		console.log("Oops, no sandwiches for you.");
		return 0;
    };
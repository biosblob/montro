function radsimplify(number) {
	//REQUIRES: GCD.JS
	var outside = 1;
	var d = 2;
	while (d * d <= number) {
		if (number % (d * d) === 0) {
			number = number / (d * d);
			outside = outside * d;
		} else {
			d = d + 1;
		}
	}
    
    return(outside + "," + number);
}
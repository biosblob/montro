function gcd(a,b) {
	while (b!=0) {
		var c = a % b;
		a = b;
		b = c;
	}
    return a;
}
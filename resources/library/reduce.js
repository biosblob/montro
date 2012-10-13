function reduce(fraction){
	fraction = fraction.split("/");
	gcdans = gcd(fraction[0],fraction[1]);
	var answer = fraction[0]/gcdans;
	return answer + "/" + fraction[1]/gcdans;
}
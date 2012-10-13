function slope(x1, y1, x2, y2) {
	var y = y2 - y1;
	var x = x2 - x1;
	return reduce(y + "/" + x);
}
function equation(x1, y1, x2, y2) {
	var intercept = ((x1 * -1) * eval(slope(x1, y1, x2, y2))) + y1;
	return intercept;
}
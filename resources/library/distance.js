function distance(x1, y1, x2, y2) {
    // Calculate X and Y values.
    var x = (x2 - x1) * (x2 - x1);
    var y = (y2 - y1) * (y2 - y1);
    var distance = Math.sqrt(x+y);
    // Set, round, and display the distance. 100 is because it's rounded to 10^2 digit.
    return Math.round(distance * 100) / 100;
}
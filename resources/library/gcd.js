function gcd(a,b) {
    if (b!=0) {
        gcd(b,a%b);
    }
    return a;
}
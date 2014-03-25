/**
 * Created by ranko on 26/03/14.
 */
function fibonaci(n) {
if (n==1) {
    return 1
} else if (n==0) {
        return 0
} else {
    return fibonaci(n-2) +fibonaci(n-1)
}
}
var num = 20;

console.log('result is', fibonaci(num));
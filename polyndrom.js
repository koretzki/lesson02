/**
 * Created by ranko on 26/03/14.
 */
function isPolyndrom(word) {
    var l = word.length;
    for (var i = 0; i < l; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}
console.log('result is', isPolyndrom('aa'));
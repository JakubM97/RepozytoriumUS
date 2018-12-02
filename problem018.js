
function reverse(func) {
    return function() {
        return func(...Array.from(arguments).reverse());
    }
}

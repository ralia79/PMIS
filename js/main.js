function getMin(array) {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= min) {
            min = array[i];
        }
    }
    return min;
}

// (1,2,3,4,5,)
// (5,4,3,2,1)


// g(n) = n-1
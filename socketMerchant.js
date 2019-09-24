let arr = [1, 2, 3, 3, 4, 5, 5]
// first object
const socketMerchant = (n, arr) => {
    // sort the array
    let sorted = arr.sort((a, b) => {
        return a - b
    });
    let pairs = 0;
    /**
     * loop through and check for adjacent equivalents 
     * if found add to count an slip the next index
     */
    for (let i = 0; i < n - 1; i++) {
        if (sorted[i] === sorted[i + 1]) {
            pairs++;
            i += 1;
        }
    }
    return pairs;
}
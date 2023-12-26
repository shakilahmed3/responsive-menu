function findIndicesForSum(targetSum, numbers) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const currentSum = numbers[left] + numbers[right];

        if (currentSum === targetSum) {
            return [left, right];
        } else if (currentSum < targetSum) {
            left++;
        } else {
            right--;
        }
    }
    return null;
}


// Example:
const numbersList = [1, 3, 5, 7, 9, 11, 13];
const targetSum = 24;

const result = findIndicesForSum(targetSum, numbersList);

if (result !== null) {
    const [index1, index2] = result;
    console.log(`Indices: ${index1}, ${index2}, Values: ${numbersList[index1]}, ${numbersList[index2]}`);
} else {
    console.log("No such numbers found.");
}
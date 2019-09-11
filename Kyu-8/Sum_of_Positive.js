function positiveSum(arr) {
	sum = 0;
	// for each value of the array
	for (var i of arr) {
		// check if it's positive
		if(Math.abs(i) == i) {
			// if so, add it to the sum
			sum += 1;
		}
	}
	return sum;
}

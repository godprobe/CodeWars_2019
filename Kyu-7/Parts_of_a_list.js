function partlist(arr) {
	x = [];
	for (i = 1; i < arr.length; i++) {
		x.push([arr.slice(0,i).join(' '),arr.slice(i,arr.length).join(' ')])
	}
	return x;
}

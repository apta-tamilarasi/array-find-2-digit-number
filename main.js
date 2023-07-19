var arr=[12, 13, 40, 1, 5, 100, 1489, 33, 45, 22, 94];

	document.write("Given array is "+"[12, 13, 40, 1, 5, 100, 1489, 33, 45, 22, 94]"+"<br><br>");
	document.write("Find 2 digit number"+"<br><br>");
	
for (let i=0; i<arr.length; i++){
	if((9<arr[i])&&(arr[i]<100)){
		document.write(arr[i]+"<br>");
	}
}
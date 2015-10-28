// challenge #1
function multiply(a,b){
	return a*b;
}

//challenge #2
function isEven(num){
	if (num%2===0){
		return true;
	}
	else{
			return false;
		}
}

//chalenge #3

function swap(arr, idx1, idx2){
	var value1 = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = value1;
	return arr;

}

//challenge #4

function getRand(min, max){
	return (Math.random()*(max-min))+min;
}

// challenge #5
function randArr(size){
	var arr = [];
	for(var i = 0; i<size; i++){
		arr[i] = Math.random()*100;
	}
	return arr;
}
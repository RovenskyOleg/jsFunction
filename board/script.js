
var Plus = function(number) {
    return number + 2;
};

var Big = function(a,b,c){
	if (a > b){
		return a;
	}
	else if(b > c){
		return b;
	}
	else
		return c;
}

var Arr = function() {
	var array = [2,5,7,2,4,8];
    return Math.max.apply( Math, array );
};

var Arr2 = function() {
	var array = [2,5,7,3,4,8];
    var el = Math.min.apply( Math, array );   
    return array.indexOf(el); 
};

var Arr3 = function() {
	var array = [2,5,7,3,4,8];
	var NewArray = []; 
    return NewArray = array.slice(); 
};

var ArrSort = function() {
	var array = [2,5,7,3,4,8];
    return array.sort(); 
};

var newNumberPlus = Plus(2);
console.log("sum = " + newNumberPlus);

var newNumberBig = Big(2,3,4);
console.log("big el = " + newNumberBig);

var newNumberArr = Arr();
console.log("max el = " + newNumberArr);

var newNumberArr2 = Arr2();
console.log("Index min el = " + newNumberArr2);

var newNumberArr3 = Arr3();
console.log("Copy of the original array = " + newNumberArr3);

var newNumberArrSort = ArrSort();
console.log("sort array = " + newNumberArrSort);
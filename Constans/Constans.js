/* window.onload = function () {
  const pi = 3.142;

  function calcArea(r) {
    const pi = 10;
    console.log('The area is : ' + pi * r * r);
  }

  console.log(pi);
  calcArea(5);
}; */

// Zmienna "const" w zakresie globalnym nie zmienia swojej wartości, ale wewnątrz funkcji możemy jej nadać inną wafrtość i zadziała.
/* window.onload = function () {
	var x = 10;

	if (x > 5) {
		let x = 5;
		console.log(x);
	}

	console.log(x);
} */


/* window.onload = function () {
	var items = document.getElementsByTagName("li");

	for (let x = 0; x < items.length; x++) {
		items[x].onclick = function () {
			console.log(x);
		}
	}
} */

/* window.onload = function () {
	function log(num=10) {
		console.log(num);
	}

	log(20);
} */

/* window.onload = function () {

	function logNinja(name, belt, age) {
		console.log("My name is " + name +
			" and my belt color is " + belt +
			" and my ages is " + age);
	}
	logNinja("Sharon", "red", 21);
} */


/* window.onload = function () {

   function logNinja(name="robin", belt="green", age=14) {
	   console.log("My name is " + name +
		   " and my belt color is " + belt +
		   " and my ages is " + age);
	   
   }
   logNinja("bill", "pink", 12);
}  */

// Operator "Spread"

/* window.onload = function () {
	
	var meats = ["ham", "salami", "becon"];
	//trzy małe kropki rozkłada tablicę na poszczególne komponenty
	console.log(...meats);
} */

/* window.onload = function () {
	
	var nums1 = [1, 2, 3];
	var nums2 = [...nums1, 4, 5, 6];

	console.log(nums2);
} */

//funkcja dodawania elementów tablicy do siebie
window.onload = function () {
	
	var nums = [3, 9, 8];
	
	function addNums(a, b, c) {
		console.log(a + b + c);
		
	}
	addNums(...nums);
}

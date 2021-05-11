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
/* window.onload = function () {
	
	var nums = [3, 9, 8];
	
	function addNums(a, b, c) {
		console.log(a + b + c);
		
	}
	addNums(...nums);
} */


// ciąg szablonów

// odwrotne znaki (znajdują sie pod 'esc' ), chodzi o to `` pozawalają na pisanie ze znakami 'białymi'

/* window.onload = function () {
	var kkk = document.querySelector('#kkk');
	function logNinja(name, age) {
		console.log(`my name is ${name} and my age is ${age}`);
		
	}

	logNinja("Ryu", 32);
	kkk.textContent = 'fdsbdc'
} */


//oblect

/* window.onload = function () {
	
	var name = "Crystal";
	var belt = "Black";

	var ninja = {
		name, belt,
		chop (x) {
			console.log(`you chopped the enemy ${x} times`);
		}
	};

	console.log(ninja.chop(5));
} */


//repeat

/* window.onload = function () {
	
	var str = "graaaavy";
	// ilość w nawiasie poniżej, określa ilość powtórzeń
	console.log(str.repeat(5))

} */

//startsWith
/* window.onload = function () {
	var str = "goodbye";
	//sprawdzamy czy na czwartym miejscu indexu w wartości zmiennej "str" znajduje się "bye"
	console.log(str.startsWith("bye", 4));
} */

window.onload = function () {
	var str = "goodbye";

	console.log(str.endsWith("good", str.length - 3));
}
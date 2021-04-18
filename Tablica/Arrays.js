console.log('JS');

// Tablica to poprostu lista elementów, która ma swoją kolejność

const arr = [1, 2, 3];
console.log(arr);

// Sumowanie elementów tablicy

const sum = arr[0] + arr[1] + arr[2];
console.log(sum);

// Dwie tablice

const alfa = [1, 2];
const beta = alfa;

// Zwiększanie tablicy o kolejny element metodą PUSH

beta.push(4);
console.log(beta);

// Metoda "forEach" (tzw,funkcja wyższego rzędu)

alfa.forEach(function(){});

// Wyszukiwanie elementów DOM

const liList = document.getElementsByTagName('li');

const ids = [];
for(let i=0; i<liList.length; i++) {
	ids.push(parseInt(liList[i].dataset.id));
}
console.log(ids);

// Filter - to jest metoda która jest dostępna dla tablic. Filter też jest funkcją wyrzszego rzędu

const newArr = ids.filter(function(num) {
	return num > 12
});

console.log(newArr);

// Tablica dwuwymiarowa

const arr = [
	['Kasia', 'Kowalska', 22],
	['Michał', 'Nowak', 23],
	['Ala', 'Polak', 33],
]























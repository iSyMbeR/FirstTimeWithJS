/**
 * Ćwiczenie 3 - posługiwanie się tablicami i funkcjami
 */

//1. Napisz funkcję, która łączy dwie tablice przy pomocy wskazanej operacji - jako pierwszy parametr przyjmuje pewną funkcję dwuparametrową
// i wypełnia tablicę wyjściową wynikiem wykonania tej funkcje na kolejnych elementach obu tablic.
// Np. jeśli przekazano funkcję obliczającą sumę dwóch liczb oraz tablice [4, 5, 6] i [10, 20, 30], zostanie zwrócone [14, 25, 36].


function sum(a, b) {
    return a + b;
}

function mergeTwoArrays(fun, firstArr, secondArr) {
    let arr = [];

    firstArr.forEach((val, index) => {
        arr.push(fun(firstArr[index], secondArr[index]));
    });
    return arr;
}

console.log("ZAD 1 \n\n");
console.log(mergeTwoArrays(sum, [4, 5, 6], [10, 20, 30]));


//Wypróbuj użycie tej funkcji do stworzenia tablicy punktów z dwóch tablic wypełnionych odpowiednio współrzędnymi
// x oraz y (czyli np. z tablic [1, 2, 3] oraz [7, 8, 9] zostaną stworzone [{x:1,y:7}, {x:2,y:8}, {x:3,y:9}]).
function createPoint(a, b) {
    return {
        x: a,
        y: b
    };
}

console.log("\n");
console.log(mergeTwoArrays(createPoint, [1, 2, 3], [7, 8, 9]));

/// (***) Spróbuj napisać taką wersję tej funkcji, która może przyjąć dowolną liczbę tablic (oraz pewną funkcję przyjmującą liczbę parametrów
// równą liczbie tablic) - wówczas np. przekazanie [1,2,3], [5,6,7] i [10,20,30] oraz funkcji dodającej trzy liczby zwróci [16,28,40].

function infinitySum(...x) {
    let sum = 0;
    x.forEach((val, index) => {
        sum += val;
    });
    return sum;
}

function mergeAllArrays(fun, ...x) {
    let arr = [];
    let tmpArr = [];
    x[1].forEach((val, index) => {
        x.forEach((el) => {
            tmpArr.push(el[index])
        });
        arr.push(fun(...tmpArr));
        tmpArr = [];
    });
    return arr;
}

console.log("\n");
console.log(mergeAllArrays(infinitySum, [1, 2, 3], [5, 6, 7], [10, 20, 30], [4, 3, 2], [1, 2, 0]));

// Napisz funkcję, która przyjmuje dwa parametry oznaczające początek i koniec zakresu, a następnie zwraca funkcję bezparametrową,
// której kolejne wywołania będą zwracać kolejne całkowite wartości tego zakresu (lub NaN po jego przekroczeniu). Np. dla argumentów 3 i 5 kolejne wywołania zwróconej funkcji będą zwracać 3, 4, 5, NaN.
// Funkcja powinna działać również wtedy, gdy pierwszy parametr jest większy od drugiego
// (przechodząc zakres w drugą stronę), np. dla argumentów 7 i 3 kolejno będą zwracane wartości 7, 6, 5, 4, 3, NaN.
function zad2(start, end) {
    return function () {
        if (start === end + 1) return NaN;
        else return start > end ? start-- : start++;
    };
}

console.log("ZAD 2 \n\n");
let x = zad2(4, 8);
for (let i = 4; i <= 9; i++) {
    console.log(x());
}


//Napisz funkcję, która jako argument przyjmuje napis, następnie zlicza w nim wystąpienia każdego znaku i zwraca jako obiekt-słownik.
function zad3(text) {
    let dictionary = [];
    [...text].forEach(element => {
        dictionary[element] ? dictionary[element]++ : dictionary[element] = 1;
    })
    return dictionary;
}

console.log("ZAD 3 \n\n");
console.log(zad3("aabbccdefgh"));
//Napisz funkcję, która jako parametr przyjmuje tablicę,
// z której usuwa co drugi element, a następnie skaluje zawartość do przedziału [0,1]
// (czyli poddaje każdy element takiemu przekształceniu, by najmniejsza wartość stała się zerem,
// a największa jedynką), po czym wypisuje całość do konsoli, z dokładnością do dwóch miejsc po przecinku.
// W zadaniu wykorzystaj metody map i filter.

function zad4() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.ceil(Math.random() * 10) + 1);
    }
    console.log(arr);
    arr = arr.filter((element, index) => index % 2 === 0);
    return arr.map(element => ((element - Math.min(...arr)) / (Math.max(...arr) - Math.min(...arr))).toFixed(2));
}

console.log("ZAD 4 \n\n");
console.log(zad4());

//Stwórz tablicę o zadanym rozmiarze, wypełnij ją losowymi wartościami z przedziału 1-10, a następnie policz (korzystając z metody reduce)
// ile występuje w niej liczb parzystych i ile wynosi iloczyn wszystkich jej elementów.
function zad5(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.ceil(Math.random() * 10) + 1);
    }
    console.log(arr);
    console.log("Liczb parzystych : " + arr.reduce((previousValue, currentValue) => currentValue % 2 === 0 ? previousValue + 1 : previousValue, 0));
    console.log("iloczyn wszystkich elementow : " + arr.reduce((previousValue, currentValue) => previousValue * currentValue, 1));
}

console.log("ZAD 5 \n\n");
zad5(5);

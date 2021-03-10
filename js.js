//Wypisz do konsoli wartości od 1 do 100, zastępując każdą wartość parzystą słowem "Fiz",
//a każdą podzielną przez trzy słowem "Buz" (lub słowem "FizBuz" jeśli jest podzielna zarówno przez 2 jak i przez 3).
//Wartości wypisz w pojedynczym wierszu - pojedynczą instrukcją console.log (np. budując string).
function zadanie1() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log("FizzBuzz");
            continue;
        } else if (i % 2 === 0) {
            console.log("Fiz");
            continue;
        } else if (i % 3 === 0) {
            console.log("Buz");
            continue;
        }
        console.log(i);
    }
}

function clearConsole() {
    console.clear();
}

//Wczytaj od użytkownika (wykorzystując funkcję prompt()) długość promienia koła.
//Oblicz jego obwód i pole powierzchni. Wypisz je do konsoli, zaokrąglając wartość do dwóch miejsc po przecinku.
function zadanie2() {
    let radius = prompt("Podaj długość promienia koła")
    let area = Math.PI * Math.pow(radius, 2);
    let circumference = 2.0 * Math.PI * radius;
    console.log('Pole kola wynosi : ' + area.toFixed(2));
    console.log('Obwod kola wynosi : ' + circumference.toFixed(2));
}

let myArray = [];

//Stwórz i wypełniaj tablicę losowymi wartościami z przedziału 1-10, do momentu gdy ich suma nie osiągnie 200.
function zadanie3a() {
    let tmpValue;
    let sum = 0;
    let index = 0;
    while (sum < 200) {
        tmpValue = Math.floor(Math.random() * 10) + 1;
        sum += tmpValue;
        myArray[index++] = tmpValue;
    }
    console.log("Zawartosc tablicy po pierwszej operacji : ")
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}

//Znajdź wartość najmniejszą i usuń jej pierwsze wystąpienie.
function zadanie3b() {
    const minValueFromArray = Math.min(...myArray);
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === minValueFromArray) {
            myArray.splice(i, 1);
            break;
        }
    }
    console.log("Zawartosc tablicy po drugiej operacji : ")
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}

//Znajdź wartość największą i usuń jej ostatnie wystąpienie.
function zadanie3c() {
    const maxValueFromArray = Math.max(...myArray);
    let tmp = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === maxValueFromArray) {
            tmp = i;
        }
    }
    myArray.splice(tmp, 1);
    console.log("Zawartosc tablicy po trzeciej operacji : ")
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}

// do pporawienia Wypisz do konsoli informację ile razy każda z wartości występuje w tablicy.
function zadanie3d() {
    let myArrayCounter = [];

    for (let i = 0; i < 10; i++) {
        myArrayCounter[i] = 0;
    }
    console.log(myArrayCounter.length)
    //inkrementujemy element tablicy o indexie rownnym wartosci
    for (let i = 0; i < myArray.length; i++) {
        myArrayCounter[myArray[i] - 1] += 1;
    }
    console.log(myArrayCounter.length);
    console.log("Zawartosc tablicy po czwartej operacji : ")
    for (let i = 0; i < myArrayCounter.length; i++) {
        console.log('wartosc ' + (i + 1) + ' wystepuje ' + myArrayCounter[i] + ' razy');
    }

}

//Dziesięć pierwszych wartości (o indeksach 0-9) przenieś na koniec (nie zmieniając ich kolejności).
function zadanie3e() {
    let myTmpArray = myArray.splice(0, 10);
    myArray.push(...myTmpArray);
    console.log("Zawartosc tablicy po piatej operacji : ")
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}


//Zadeklaruj tablicę wypełnioną pięcioma imionami (napisami).
// Następnie każde imię "zakoduj" zmieniając każdą literę "a" lub "A" na "4", a każdą "e" lub "E" na "3".
// Następnie z każdego imienia dłuższego niż 6 znaków wytnij środek, aby zostawić trzy pierwsze i trzy ostatnie litery,
// a na jego miejsce wstaw trzy kropki "...".
// Np. imię "Kazimierz" zmieni się w "K4z...3rz". Efekt wypisz do konsoli.
function zadanie4() {
    let arrayOfNames = ['Grazyna', 'Pioter', 'Janusz', 'Zlodziej', 'Somsiad',]

    for (let i = 0; i < arrayOfNames.length; i++) {
        arrayOfNames[i] = arrayOfNames[i].replace("a", "4");
        arrayOfNames[i] = arrayOfNames[i].replace("A", "4");
        arrayOfNames[i] = arrayOfNames[i].replace("e", "3");
        arrayOfNames[i] = arrayOfNames[i].replace("E", "3");
        if (arrayOfNames[i].length > 6) {
            let tmpString = "";
            tmpString += arrayOfNames[i].substring(0, 3);
            tmpString += "...";
            tmpString += arrayOfNames[i].substring(arrayOfNames[i].length, arrayOfNames[i].length - 3);
            arrayOfNames[i] = tmpString;
        }
    }
    for (let i = 0; i < arrayOfNames.length; i++) {
        console.log(arrayOfNames[i]);
    }
}

//Dany jest string zawierający nazwy towarów oddzielane przecinkami (np. "jajka, mleko, masło, chleb").
// Na tej podstawie stwórz cennik - tablicę obiektów. Każdy obiekt w tej tablicy zawiera dwa pola - nazwę (wydobytą ze stringu) oraz cenę (losową wartość rzeczywistą z dokładnością do dwóch miejsc po przecinku).
// Wyświetl ją w konsoli. Następnie stwórz tablicę zakupów. Przenieś do niej wybrane losowo towary (nie więcej niż połowę), do każdego z nich dopisując ilość (losową).
// W konsoli wyświetl tablicę zakupów oraz całkowitą cenę.
function zadanie5() {
    let stringOfGoods = "eggs, milk, butter, bread, water";
    let products = stringOfGoods.split(", ");
    let pricing = [];
    let basket = [];
    //creating pricing
    for (let i = 0; i < products.length; i++) {
        pricing.push({
            product: products[i],
            price: (Math.floor(Math.random() * 10) + 1).toFixed(2)
        })
    }
    console.log("Cennik produktow:\n");
    console.log(pricing);

    let tmpArray = [4, 3, 1, 2, 5];
    //creating basket
    for (let i = 0; i < Math.floor(products.length / 2); i++) {
        basket.push({
            product: products[tmpArray[i]],
            quantity: (Math.floor(Math.random() * 5) + 1)
        })
    }
    console.log("Nasz koszyk :\n");
    console.log(basket);
}

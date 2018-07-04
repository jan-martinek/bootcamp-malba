# Základní konstrukce v JS

Rychlá reference pro účastníky Bootcampu na Malbě.

***


## příkaz

příkaz je vždy ukončený středníkem:

```js
console.log("hello world");
```


## definice proměnné

```js
var num = 1;
var str = "text";
```


## datové typy

číslo:

```js
1
3.14
```

řetězec:

```js
"slovo"
"delší řetězec"
```

booleovská (pravdivostní hodnota)

```js
true
false
```

pole

```js
[1, 47, 23, 11]
```

objekt

```js
{ klíč: hodnota, klíč2: hodnota2 }
```


## čtení hodnoty z pole

```js
var arr = [34, 2, 47];
arr[0]; // => 34
arr[1]; // => 2
```


## čtení hodnoty v objektu

```js
var arr = { age: 23, name: "Honza" };
arr.age; // => 23
arr["name"]; // => Honza
```

notace se závorkami je vhodná při čtení podle obsahu proměnné

```js
var arr = { age: 23, name: "Honza" };

var wantedProperty = "name";

arr[wantedProperty]; // Honza
```


## operátory

```js
4 + 1 == 6 - 1 // sčítání, rovnost, odčítání

8 / 2 >= 2 * 2 // dělení, větší či rovno, násobení

true && false // logické „a zároveň“

true || false // logické „nebo“

14 % 3 // modulo (zbytek dělení)
```

pozor na datové typy, občas se chovají divně

```js
"slovo" + "slovo" // => "slovoslovo"

1 * "nothing" // => NaN

1 + "nothing" // => "1nothing"

undefined + 1 // => NaN (not a number)
```


## funkce

definice funkce:

```js
function multiply(number1, number2) {
	return number1 * number2;
}
```

volání funkce:

```js
multiply(2, 5);
```

funkci je možné předávat jako jiné proměnné jako parametr jiné funkce, která si ji zavolá (tzv. callback), např.

```js
function multiplyByTwo(num) {
	return 2 * num;
}

[1, 3, 4].map(multiplyByTwo); // [2, 6, 8]
```

```js
function isLowerThanFour(num) {
	return num < 4;
}

[1, 3, 4].filter(isLowerThanFour); // [1, 3]
```

```js
/* využívá funkce p5.js */
function drawLineAndRotate() {
	line(0, 0, 100, 100);
	rotate(30);
}

/* opakuje funkci fn n-krát */
function repeat(fn, n) {
  var a = Array.apply(null, Array(n)).map(
    function (_, i) {return i + 1;}
  ).forEach(fn);
}

repeat(drawLineAndRotate, 360 / 30);
```


## návratová hodnota a side effects

- funkce vracející hodnotu vždy obsahuje příkaz **`return`**
- funkce s vedlejšími účinky (side effects) ovlivňuje něco vně (například vypisuje do konzole, kreslí do canvasu atp.)


## výpis proměnné konzole

```js
// jednoduché hodnoty
var num = 1;
console.log(num);

// komplexnější data
var data = [ { ... }, { ... }, ... ];
console.table(data);
```


## if / else

```js
if (podmínka) {
	// kód, pokud je podmínka splněna
} else {
	// druhá varianta
}
```
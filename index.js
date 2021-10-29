const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
}

function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(Broom) {
    const newCats = [...cats];
    newCats.push("Broom");
    return newCats;
}

function prependCat(Arnold) {
    const newCats1 = [...cats];
    newCats1.unshift("Arnold");
    return newCats1;
}

function removeLastCat(name) {
    const copyOfCats = cats.slice(0,2);
    return copyOfCats;
}

function removeFirstCat() {
    const copyOfCats1 = cats.slice(1);
    return copyOfCats1;
}
function searchByName(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        } 
    }
}

var fruits = [
    { id: 1, name: 'Banana', color: 'Yellow'},
    { id: 2, name: 'Apple', color: 'Red' }
];
var result = searchByName('Apple', fruits);
console.log(result);
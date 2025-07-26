let person = [{
    name: "laura",
    age: 22,
    country: "USA"
},
{
    name: "rakayle",
    age: 30,
    country: "Spain"
},
{
    name: "peterson",
    age: 35,
    country: "UK"
},
{
    name: "Harry Larson",
    age: 35,
    country: "UK"
}];

//it maps or iterates through whole array
person.map((v, i, a) => {
    console.log(v.country)
});

// find() finds the for any specific condition in array and then returns that element 
//it only returns the first occurence
let find = person.find((value, index, object) => {
    return value.age == 35;
    // return index == 2 && value.name == 'peterson';
});
console.log(find);

//it will check for all the conditions and then returns every elenent that matches that condion
let filterCheck = person.filter((value, index, array) => {
    return value.age == 35;
})
console.log(filterCheck);

//.some() -  it checks weather if atlest one element fulfills the given condition, then return true or false
let someCheck = person.some((v, i, a) => {
    return v.age > 30;
})
console.log(someCheck);

//.every() - if check every element in the array fulfils the condition the returns true
let everyCheck = person.every((v, i, a) => {
    return v.age > 10;
    //as the age of every person is greater than 10 if will return true.
});
console.log(everyCheck);
console.log(person.includes(0, person.age == 20));

let fruitsArray = ["apple", "banana", "orange"];
console.log(fruitsArray.indexOf('orange'));

//findIndexOf() - takes an callback function and return the index if any element specifies the condition.
let findIndexOfCheck = person.findIndex((v, i, obj) => {
    return v.age == 'USA';
});
console.log(findIndexOfCheck);

person.forEach(element => {
    console.log(element.name);

});
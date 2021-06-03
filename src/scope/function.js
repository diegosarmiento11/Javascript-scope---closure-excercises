//Function scope

const fruit = () => {
    var fruit = 'apple'
    console.log(fruit)
}

fruit() //ok
console.log(fruit)  // not okay


// Local scope and you cant re assigned a let variable

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    let y = 2;
    console.log(x);
    console.log(y)
}

anotherFunction()
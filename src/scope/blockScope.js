// Block scope

const fruits = () => {
    if (true) {
        var fruta1 = 'banano';
        let fruta2 = 'pera';
        const fruta3 = 'kiwi';
    }
    console.log(fruta1);
    console.log(fruta2);
    console.log(fruta3);
}

// Let and const variables cant be accessed if they are not in the same block of code

fruits()
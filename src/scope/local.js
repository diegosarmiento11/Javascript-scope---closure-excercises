// Local scope

const helloWorld = () => {
    const hello = 'hello world';
    console.log(hello)
}

helloWorld()
// Hello variable is not defined out of the function scope. That's the reason why you can't accessed it using console.log

console.log(hello);






var scope = 'iam global'

const functionScope = () => {
    var scope = 'Local';
    const func = () => {
        return scope
    }
    console.log(func())
}

functionScope()

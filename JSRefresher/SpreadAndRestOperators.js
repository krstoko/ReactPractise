// We use spread operator to copy arrays, add element in array
// copy object,add property to object

const numbers = [1,2,3];
const newNumbers = [...numbers,4];

// rest operator merges arguments into array and we can use filter on that array
const filter = (...args) =>{
    return args.filter(el => el === 1)
}
console.log(newNumbers)
console.log(filter(1,2,3))
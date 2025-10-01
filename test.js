
// forEach
[1,2,3].forEach(function(item,index){
    console.log(item, index)
})


// map
const three = [1,2,3];
const double = three.map(function(item){
    return item * 2
})
console.log(double)


// filter
const four = [1,2,3,4,5];
const even = four.filter(function(item){
    return item % 2 === 0
})
console.log(even)


// reduce
const five = [1,2,3,4,5];
const sum = five.reduce((accumulator, item)=>{
    return accumulator + item
}, 0)
console.log(sum)

// some

const hasNegativeNumber = [1, 2, 3, -1, 5];
const hasNegative = hasNegativeNumber.some(function(item){
    return item < 0
})
console.log(hasNegative)

//every
const allPositive = [1, 2, 3, 4, 0];
const allPositives = allPositive.every(function(item){
    return item > 0
})
console.log(allPositives)

//find
const objects = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Jim'},
]
const findObject = objects.find(function(item){
    return item.id === 2
})
console.log(findObject)

//findIndex
const objects2 = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Jim'},
]
const findIndex = objects2.findIndex(function(item){
    return item.id === 2
})
console.log(findIndex)

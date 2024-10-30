const nums = [2, 8, 4, 7, 12, 87,3,14,15,12,78,55];

numeriPari = [];
numeriDispari = []
// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// nums.forEach((num) =>{
//     if(num % 2 === 0){
//         numeriPari.push(num)
//     }else
//         numeriDispari.push(num)
// })
// console.log(numeriPari)
// console.log(numeriDispari)

//! METODO FIND 

numberType = nums.find((num) =>{
    if(num % 2 === 0){
        numeriPari.push(`${num} é Pari`)
    } else
    numeriDispari.push(`${num} é dispari`)
    
})

console.log(numeriPari, numeriDispari)
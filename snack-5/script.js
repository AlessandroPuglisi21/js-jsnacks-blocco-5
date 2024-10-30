const nums = [2, 8, 4, 7, 12, 87];

numeriPari = [];
numeriDispari = []
// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

nums.forEach((num) =>{
    if(num % 2 === 0){
        numeriPari.push(num)
    }else
        numeriDispari.push(num)
})
console.log(numeriPari)
console.log(numeriDispari)
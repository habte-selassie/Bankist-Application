/* const eurotousd = 1.1
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 const alxa = movements.map(function(x){
return x *eurotousd;
});
console.log(movements);
console.log(alxa);

const crypto = movements.map((mov,i,arr)=>{

    if (mov > 0) {
      return 'it is profit money';
    }
    else{
        return 'it is profit money';
    }
})

console.log(crypto);

const deposit = movements.filter(function(mov){
return mov > 0;
})
console.log(movements);
console.log(deposit);



const balance = movements.reduce(function(acc,current,i,arr){
    return acc + current
},0);

console.log(balance); */


const calcaveragehumanage = function(ages){
    const humanage = ages.map(age=> (age <=2 ?
         2*age :16 + age*4))
        

         const adultdogs = humanage.filter(age=> age>=18)
         console.log(adultdogs);
         console.log(humanage);

         const average = adultdogs.reduce((acc,age) => acc
          + age,0) / adultdogs.length;

          return average;
};

const average1 = calcaveragehumanage([5,2,4,1,15,8,3]);
const average2 = calcaveragehumanage([3,6,4,0,19,28,9]);
console.log(average1,average2);

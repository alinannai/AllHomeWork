// if (true) {
//     var varV = 'sayHi'
// }
// console.log(varV);//выводится на консоли 

// if (true) {
//     let letL = 'sayHi'
// }   
// console.log(letL);//консоль выдает ошибку


// for (var i = 0; i < 10; i++){
//     setTimeout(()=> console.log(i),0);//на консоли выводится от 10 до 10
// }
// for (let i = 0; i < 10; i++){
//     setTimeout(()=> console.log(i),0);//на консоли выводится от 0 до 10
// }

// console.log(a)//на консоли выводится undefined
// var a = 9;

// console.log(b)//на консоли выводится ошибка и строка сделанной ошибки
// let b = 9;

// let x = {num: 200};
// let y = x;
// y.num = 250;
// console.log(x);//значение в объекте x переняло новое значение

// var a = {num: 200};
// var b = a;
// y.num = 250;
// console.log(a);//значение в объекте а не переняло новое значение


var funct1= function(){
    for(var i = 1; i < 7; i++){
        console.log(i);
    }
    console.log('===>',i); // на консоли выводится от 1 до 7
};
funct1();


// let funct2= function(){
//     for(let i = 1; i < 7; i++){
//         console.log(i);//на консоли выводится от 1 до 6
//     }
//     console.log(i); //консоль выдает ошибку
// };
// funct2();




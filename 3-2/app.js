const first = prompt('Your first word');
const second = prompt('Your second word');

function calcSum(first, second, more, less, equals) {
    let first1 = first;
    let second2 = second;
    
    if(first1.length > second2.length){
        more()
    } else if (first1.length < second2.length){
        less()
    }else{
        equals()
    }
}
function more (){
    console.log(first + ' > ' + second);
}
function less (){
    console.log(first + '<' + second);
}
function equals (){
    console.log(first + '=' + second);
}
calcSum(first, second, more, less, equals);
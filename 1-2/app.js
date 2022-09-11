const first_number = +prompt("fisrt number?");
const second_number = +prompt("second number?");
const third_number = +prompt("third number?");
if (first_number > second_number && second_number > third_number ) {
    console.log( first_number + '>' + second_number + '>' + third_number  )
} else if (first_number < second_number && second_number < third_number) {
    console.log (first_number + '<' + second_number + '<' + third_number)
} else if (first_number > second_number && second_number < third_number) {
    console.log(first_number + '>' + second_number + '<' + third_number)
} else if ( first_number < second_number && second_number > third_number){
    console.log(first_number + '<' + second_number + '>' + third_number)
} else if (first_number > second_number && second_number < third_number) {
    console.log(first_number + '>' + second_number + '<' + third_number)
} else if (first_number == second_number && second_number == third_number){
    console.log(first_number + '=' + second_number + '=' + third_number)
} else if (first_number == second_number && second_number > third_number){
    console.log (first_number + '=' + second_number + '>' + third_number)
} else if (first_number > second_number && second_number == third_number) {
    console.log(first_number + '>' + second_number + '=' + third_number)
} else if (first_number < second_number && second_number == third_number) {
    console.log(first_number + '<' + second_number + '=' + third_number)
}  else if (first_number == second_number && second_number < third_number){
    console.log(first_number + '=' + second_number + '<' + third_number)
} else {
    console.log(" Type a number ")
}
// calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break


let factorial = 1;
let i = 2;

while(i <= 10){
    if(i > 0){
        factorial = factorial * i;
        console.log(factorial);
        i++;
    }else {
        break;
    }
}
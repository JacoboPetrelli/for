let suma = 0
numerador = 1
for(let k = 0; k <= 1001; k++){
let denominador = 2*k+1;    
suma = suma + (numerador/denominador)
numerador = numerador *-1
}
suma = 4*(suma)
console.log("La suma es igual a " + suma)

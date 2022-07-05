

function calcular_prestamo (monto,cuotas){
  if( cuotas == 3){
    return monto * 1.25
  }
  else if(cuotas == 6){
    return monto * 1.40 
  }
  else if(cuotas == 12){
    return monto * 1.60
  }
  else if(cuotas == 18){
    return monto * 1.90
  }
  else{
    console.log("in grese una cuota entre : 3 , 6 , 12 y 18 ")
  }
}

let monto = parseFloat(prompt("Simulador de Prestamo----Ingrese Monto a Solicitar"))
let cuotas = parseFloat(prompt("ingrese la cantidad de cuotas : 3 - 6 - 12 -18 "));

calcular_prestamo (monto,cuotas)


let total_prestamo = calcular_prestamo (monto,cuotas)/cuotas;
console.log("usted va a pagar por cuotas :",total_prestamo ) 
alert("usted va a pagar :"+" "+cuotas+" "+"cuotas de :"+total_prestamo);

 
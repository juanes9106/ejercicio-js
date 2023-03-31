/*const obtenerMenor = (numeros) => {
    let menor = Infinity;
    for (let i=0; i<numeros.length; i++){
        if(numeros[i]<=menor){
            menor = numeros[i];
        }
    }
    return(menor);
}
console.log(obtenerMenor([5,3,4,5,6,7]))


const sumaNumeros = (numero) =>{

    let final =""
    for(let i = 0;i<numero.length;i++){
        final = parseInt(final + numero[i])
       
    }
    return final

}
console.log(sumaNumeros([2,3,4,5,6,7,8]));

const contieneIndice = (numero, numeros) => {
    for ( let i=0; i<numeros.length; i++){
        if(numeros[i] === numero){
            return true
        }
    }
    return false
}
 console.log(contieneIndice(32,[3,2,1,4,5,32]))//true
 console.log(contieneIndice(1,[2,3,4,5,6,7]))//false

 const separar = (string) => {
    const arrayEmoji = string.sort().reverse();
    return arrayEmoji 

 }

 console.log(separar(['😺','💩','💩','💩','💩','😺','😺','😺']));

 const estarJuntos = (personajes) => {
    const frodo = personajes.indexOf('Frodo'); //indexOf buscar los nombres
    const sam = personajes.indexOf('Sam');
    return sam-frodo === 1 || sam - frodo === -1
 }

 console.log(estarJuntos(['Sam', 'Frodo', 'Legolas']))//true
 console.log(estarJuntos(['Aragon', 'Frodo', 'Sam']))//true
 console.log(estarJuntos(['Sam','Orco','Frodo']))//false*/

 const obtenerIndice = (valor, array) => {
    return array.indexOf(valor);
     

 }
 console.log(obtenerIndice(5,[38,42,5,16,22]))
 console.log(obtenerIndice(83,[3,4,5,16,22]))

 const repetir = (valor, num) => {
    let print = [];
    for (let i=0; i<num;i++){
        print.push(valor);
    }
        return (print)
 }
 console.log(repetir('lovelace', 3))
 console.log(repetir('b', 5))
 console.log(repetir('html',0))
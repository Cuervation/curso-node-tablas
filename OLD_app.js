

console.clear();
console.log('=====================');    
console.log('Tabla del : 5');    
console.log('=====================');    


const base = 3;

let salida = '';

const fs = require('fs');

for (let i = 1; i <= 10; i++) {
    //console.log('5 * ' + i + ' = ' + 5 * i);    
    //console.log(`${ base } x ${ i } = ${ base * i} `);    

    salida = salida + `${ base } x ${ i } = ${ base * i}\n`
 }

 console.log(salida)

 let archivo  = `tabla-${ base }.txt`;

 fs.writeFile(archivo,salida, (err) => 
    {   
        if (err) throw err;
 
        console.log(`archivo ${archivo} creado!`);
    })
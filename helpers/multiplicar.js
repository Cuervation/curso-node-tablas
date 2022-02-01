
const fs = require('fs');
const { resolve } = require('path/posix');


const crearArchivo = (base = 5 ) => {

    return new Promise( (resolve, reject) => {
        console.clear();
        console.log('=====================');    
        console.log(`Tabla del : ${ base }`);    
        console.log('=====================');  

        let salida = '';

    
        for (let i = 1; i <= 10; i++) {
    
         salida = salida + `${ base } x ${ i } = ${ base * i}\n`
        
        }
    
         console.log(salida)
    
        let archivo  = `tabla-${ base }.txt`;
    
        fs.writeFileSync(archivo,salida ); 
                    
     
        resolve(console.log(`archivo ${archivo} creado!`));
        })

} 

module.exports = {
    
    crearArchivo

}

const fs = require('fs');
const { resolve } = require('path/posix');
const colors = require('colors');

const crearArchivo = async(base = 5,listar=false,hasta=15 ) => {
   try {
        console.clear();


        if (listar) {
            console.log('=====================');    
            console.log(`Tabla del : ${ base }`);    
            console.log('=====================');  
        }
        let salida = '';

    
        for (let i = 1; i <= hasta; i++) {
    
         salida = salida + `${ base } x ${ i } = ${ base * i}\n`
        
        }
        if (listar) {
            console.log(salida.rainbow)
        }
    
        let archivo  = `./salida/tabla-${ base }.txt`;
    
        fs.writeFileSync(archivo,salida ); 
                    
     
        return console.log(`archivo ${archivo} creado!`);
    } catch (err) {
        throw err;

    }

 }



module.exports = {
    
    crearArchivo

}
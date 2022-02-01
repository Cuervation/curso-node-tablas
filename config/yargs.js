const argv = require('yargs')
            .option('b', {
                alias : 'base',
                type :'number',
                demandOption : true,
                describe : "es el multiplo"
            })
            .option('l', {
                alias : 'listar',
                type :'boolean',
                default:false                
            }            
            ) 
            .option('h', {
                alias : 'hasta',
                type :'number',
                default:15
            }            
            )               
            .check( ( argv,options ) => {
                //console.log('yargs',argv)
                if ( isNaN( argv.b )) {
                    throw 'La base tiene que ser un número'
                }
                return true;
            })
            .argv;


module.exports = argv;
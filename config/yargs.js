const { option } = require('yargs');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                })
                .option('l',{
                    alias:'listar',
                    type: 'boolean',
                    default: false
                })
                .option('h',{
                    alias:'hasta',
                    type:'number',
                    default: 10
                })
                .check( (argv, options) => {
                    if( isNaN(argv.b)){
                        throw 'la base debe ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports =  argv;
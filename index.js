const resultado = require('./modulos/suma')

console.log(resultado(4,6))

var moment = require('moment');

/*const Date = moment().format('MMMM Do YYYY, h:mm:ss a');

console.log(Date())*/

console.log(moment('2019-24-03', 'YYYY-DD-MM').format('MMM Do YY'))
let fecha =  new Date()
console.log(fecha)
console.log(`${fecha.getUTCFullYear()} ${fecha.getMonth()+1}`)
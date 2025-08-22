const args = process.argv.slice(2);

let min = 1
let max = 100

console.log('values in args',args)

if (args.length >=2) {
    const parsedMin = parseInt(args[0], 10);
    const parsedMax = parseInt(args[1], 10);

    if (!isNaN(parsedMin) && !isNaN(parsedMax) && parsedMin < parsedMax) {
        min = parsedMin
        max = parsedMax
    } else {
        console.log('Rango error')
    }
    
}

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

console.log(`Numero aleatorio entre ${min} y ${max} es: ${randomNumber}` )
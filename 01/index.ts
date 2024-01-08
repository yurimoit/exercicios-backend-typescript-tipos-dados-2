const fs = require('fs');

const lerArquivos = (): unknown => {
    return JSON.parse(fs.readFileSync('./bd.json'))
}

const escreverArquivos = (dados: any): void => {
    fs.writeFileSync('./bd.json', JSON.stringify(dados))
}

console.log(lerArquivos());

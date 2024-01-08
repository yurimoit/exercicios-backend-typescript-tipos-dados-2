const fs2 = require('fs');

type Endereco = {
    cep: string,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
}
type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    profissao?: string,
    endereco: Endereco | null
}



const lerArquivos2 = (): unknown => {
    return JSON.parse(fs2.readFileSync('./bd.json'))
}

const escreverArquivos2 = (dados: any): void => {
    fs2.writeFileSync('./bd.json', JSON.stringify(dados))
}

const cadastrarUsuario = (dados: Usuario): Usuario => {
    let arquivo = lerArquivos2() as Usuario[];
    arquivo.push(dados)

    escreverArquivos2(arquivo)

    return dados;
}

const listagemUsuarios = (): Usuario[] => {
    return lerArquivos2() as Usuario[]
}

const usuario1 = {
    nome: 'Raimunda',
    email: "yuri@gmail.com",
    cpf: "07865765708",
    endereco: null
}

cadastrarUsuario(usuario1)

console.log(listagemUsuarios());

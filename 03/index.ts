const fs3 = require('fs');

type Endereco3 = {
    cep: string,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
}
type Usuario3 = {
    nome: string,
    email: string,
    cpf: string,
    profissao?: string,
    endereco: Endereco3 | null
}


const lerArquivos3 = (): unknown => {
    return JSON.parse(fs3.readFileSync('./bd.json'))
}

const escreverArquivos3 = (dados: any): void => {
    fs3.writeFileSync('./bd.json', JSON.stringify(dados))
}

const detalharUsuario = (cpf: string): Usuario3 => {
    const bd = lerArquivos3() as Usuario3[];

    const usuario3 = bd.find(usuario => {
        return usuario.cpf === cpf;
    })

    if (!usuario3) {
        throw new Error("Usuario nao encontrado");

    }

    return usuario3
}

const atualizarUsuario = (cpf: string, dados: Usuario3): Usuario3 => {
    const bd = lerArquivos3() as Usuario3[];

    const usuario3 = bd.find(usuario => {
        return usuario.cpf === cpf;
    })

    if (!usuario3) {
        throw new Error("Usuario nao encontrado");

    }

    Object.assign(usuario3, dados);

    escreverArquivos3(bd)

    return dados;
}

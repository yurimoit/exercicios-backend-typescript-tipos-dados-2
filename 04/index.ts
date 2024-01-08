const fs4 = require('fs');

type Endereco4 = {
    cep: string,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
}
type Usuario4 = {
    nome: string,
    email: string,
    cpf: string,
    profissao?: string,
    endereco: Endereco4 | null
}


const lerArquivos4 = (): unknown => {
    return JSON.parse(fs4.readFileSync('./bd.json'))
}

const escreverArquivos4 = (dados: any): void => {
    fs4.writeFileSync('./bd.json', JSON.stringify(dados))
}

const excluirUsuario = (cpf: string): Usuario4 => {
    const bd = lerArquivos3() as Usuario4[];

    const usuario4 = bd.find(usuario => {
        return usuario.cpf === cpf;
    })

    if (!usuario4) {
        throw new Error("Usuario nao encontrado");
    }

    const exclusao = bd.filter(usuario => {
        return usuario.cpf !== cpf
    });

    escreverArquivos4(exclusao);

    return usuario4;
}
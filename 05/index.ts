const fs5 = require('fs');

type Endereco5 = {
    cep: string,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
}
type Usuario5 = {
    nome: string,
    email: string,
    cpf: string,
    profissao?: string,
    endereco: Endereco5 | null
}


const lerArquivos5 = (): unknown => {
    return JSON.parse(fs5.readFileSync('./bd.json'))
}

const escreverArquivos5 = (dados: any): void => {
    fs5.writeFileSync('./bd.json', JSON.stringify(dados))
}

const listarUsuarios = (filtro?: string): Usuario5[] => {
    const bd = lerArquivos5() as Usuario5[]

    const usuarios = bd.filter(usuario => {
        if (filtro) {
            return usuario.profissao === filtro;
        }

        return usuario
    })

    return usuarios;
}
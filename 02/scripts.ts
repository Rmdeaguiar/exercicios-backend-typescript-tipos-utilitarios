type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type Endereco = {
    cep: string,
    bairro: string,
    cidade: string,
    estado: string
}

type CarrinhoResultado = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: Lowercase<'credito' | 'Debito'>,
    cartao: Cartao,
    endereco: Endereco
}






// EXTRA

type CarrinhoResultado2 = Omit<Carrinho, 'tipoTransacao'> & {
    endereco: Endereco,
    tipoTransacao: Lowercase<'credito' | 'Debito'>
}

const produtoVenda: CarrinhoResultado2 = {
    item: {
        nome:'item',
        descricao: 'item venda',
        valor: 30
    },
    qtd: 2,
    desconto: 0,
    frete: 20,
    tipoTransacao: 'credito',
    cartao: {
        numero: 131221,
        validade: '10/10/2025',
        nome: 'Roberto',
        cvv: 123
    },
    endereco:{
        cep: '312121',
        bairro: 'Brotas',
        cidade: 'Salvador',
        estado: 'Bahia'
    }
}

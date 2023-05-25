type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

type UsuarioSemRg = Omit<Usuario, 'rg'>
type UsuarioResultado = Required<UsuarioSemRg>;

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}

const cadastrarUsuario2 = (info: UsuarioResultado): UsuarioResultado =>{
    return info
}



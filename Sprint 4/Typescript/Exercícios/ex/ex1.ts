

class Usuario {
    email: string
    senha: string
    admin: boolean = false
    constructor(_email: string, _senha: string) {
        this.email = _email
        this.senha = _senha
    }
    isAdmin = () => {
        if (this.admin == true)
            console.log('Você é o ADM')


        else {
            console.log('Você não é o ADM')

        }
    }
}

class Admin extends Usuario {
    constructor(_emailSuper: string, _senhaSuper: string) {
        super(_emailSuper, _senhaSuper)
        this.admin = true

    }
}

let usuario = new Usuario('BeybladePokemon@email.com' , 'girouparatras')
console.log(usuario.isAdmin());


let admin = new Admin ('Bakugan75@gmail.com' , 'jogarbakugan')
console.log(admin.isAdmin());

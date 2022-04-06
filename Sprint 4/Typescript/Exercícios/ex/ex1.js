"use strict";
class Usuario {
    constructor(_email, _senha) {
        this.admin = false;
        this.isAdmin = () => {
            if (this.admin == true)
                console.log('Você é o ADM');
            else {
                console.log('Você não é o ADM');
            }
        };
        this.email = _email;
        this.senha = _senha;
    }
}
class Admin extends Usuario {
    constructor(_emailSuper, _senhaSuper) {
        super(_emailSuper, _senhaSuper);
        this.admin = true;
    }
}
let usuario = new Usuario('BeybladePokemon@email.com', 'girouparatras');
console.log(usuario.isAdmin());
let admin = new Admin('Bakugan75@gmail.com', 'jogarbakugan');
console.log(admin.isAdmin());

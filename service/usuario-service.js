export class UsuarioService {
    constructor() {
        this.urlBase = "/usuarios";
    }

    async getUsuarios() {
        const resposta = await fetch(this.urlBase);
        return await resposta.json();
    }

    async getUsuario(id) {
        const resposta = await fetch(`${this.urlBase}/${id}`);
        return await resposta.json();
    }

    async criarUsuario(usuario) {
        const resposta = await fetch(this.urlBase, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });

        return await resposta.json();
    }

    async atualizarUsuario(id, usuario) {
        const resposta = await fetch(`${this.urlBase}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });

        return await resposta.json();
    }

    async deletarUsuario(id) {
        const resposta = await fetch(`${this.urlBase}/${id}`, {
            method: "DELETE",
        });

        return resposta.ok;
    }
}
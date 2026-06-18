import { UsuarioService, UsuarioService } from "../../service/usuario-service.js";

const usuarioService = new UsuarioService();

async function carregarDados(params) {
    let dados = await usuarioService.getUsuarios();
    console.table(dados);
}

window.addEventListener("load", carregarDados)
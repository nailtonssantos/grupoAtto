const { Router } = require('express');
const { Agricultores } = require('../models');

module.exports = {
    async inserir(agricultor) {
        const novoAgricultor = {
            razaosocial: agricultor.razaosocial,
            nome: agricultor.nomefantasia,
            cpf: agricultor.cpf,
            celular: agricultor.celular,
            estado: agricultor.estado,
            cidade: agricultor.cidade,
        }

        const resultado = await Agricultores.create(novoAgricultor)

        return resultado
    },

    async listar() {
        const agricultores = await Agricultores.findAll();

        return agricultores
    },

    async carregar(id) {
        const agricultores = await Agricultores.findByPk(id)

        return agricultores
    },
    async excluir(id) {
        const agricultores = await Agricultores.findByPk(id)

        return agricultores
    }
}
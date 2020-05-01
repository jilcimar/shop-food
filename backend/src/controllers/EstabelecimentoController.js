const crypto = require('crypto');
const connection = require('../database/connection');

module.exports  = {
    async create(request,response){
        const {name, email, city, whatsapp, uf} =  request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('estabelecimentos').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({id});
    },
    
    async index(request, response){
        const estabelecimentos = await connection('estabelecimentos').select('*');
        return response.json(estabelecimentos);
    }
};
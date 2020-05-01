const connection = require('../database/connection');

module.exports  = {
    async create(request, response){
        const { id } = request.body;        

        const estabelecimento = await connection('estabelecimentos')
        .where('id', id)
        .select('name')
        .first();

        if(!estabelecimento) {
            return response.status(400).json({error: 'Estabelecimento não cadastrado'});
        }
        
        return response.json(estabelecimento);
    }
};
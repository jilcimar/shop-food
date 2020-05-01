const connection = require('../database/connection');

module.exports  = {
    async index(request, response){
        const estabelecimento_id = request.headers.authorization;        

        const produtos = await connection('produtos')
        .where('estabelecimento_id', estabelecimento_id)
        .select('*');
        
        return response.json(produtos);
    }
};
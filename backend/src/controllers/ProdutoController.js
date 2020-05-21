const connection = require('../database/connection');

module.exports  = {
    async create(request,response){
        const {name, descricao, value} =  request.body;
        const estabelecimento_id = request.headers.authorization;        
        const [id] = await connection('produtos').insert({
            name,
            descricao,
            value,
            estabelecimento_id,
        })

        return response.json({id});
    },
    
    async index(request, response){

        const {page = 1} = request.query;

        const [count] = await connection('produtos').count();

        const produtos = await connection('produtos')
        .join('estabelecimentos', 'estabelecimentos.id','=','produtos.estabelecimento_id')
        .limit(5)
        .offset((page-1)*5)
        .select([
            'produtos.*', 
            'estabelecimentos.name',
            'estabelecimentos.whatsapp',
            'estabelecimentos.city',
            'estabelecimentos.uf']);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(produtos);
    },

    async delete(request, response){
        const {id} = request.params;
        const estabelecimento_id = request.headers.authorization;        

        const produto = await connection('produtos')
        .where('id', id)
        .select('estabelecimento_id')
        .first();

        console.log(produto, produto.estabelecimento_id);

        if(produto.estabelecimento_id != estabelecimento_id) {
            return response.status(401).json({
                error: 'Operação não permitida'
            });
        }

        await connection('produtos').where('id', id).delete();

        return response.status(200).send();
    }
};
import knex from '../database/connection';

class Select {
  async tudo(request, response){

    const todosDados = await knex.select().table('dados').orderBy('data_criacao', 'desc');

    return response.json(todosDados);
  }

  async email(request, response){
    const { email } = request.params;

    const todosDados = await knex.select().table('dados').where('email', email);

    return response.json(todosDados);
  }

    async genero(request, response){
      const { genero } = request.params;

      const todosDados = await knex.select().table('dados').where('gender', genero).orderBy('data_criacao', 'desc');

      return response.json(todosDados);
    }

    async entreDatas(request, response){
      const { primeiraData, segundaData } = request.params;

      const todosDados = await knex.select().table('dados').whereBetween('data_criacao', [primeiraData, segundaData])

      return response.json(todosDados)
    }

    async generoCriacao(request, response){
      const { genero, data } = request.params;

      console.log(genero, data)
      const todosDados = await knex.select().table('dados').where('gender', genero).andWhere('data_criacao', data);

      return response.json(todosDados)
    }

    async usuarioId(request, response){
      const { id } = request.params;

      const todosDados = await knex.select().table('dados').where('id', id)

      return response.json(todosDados);
    }

    async ultimo(request, response){
      // const { ultimaLetra }

      const todosDados = await knex.select().table('dados').where('nome', 'like', '%a').andWhere('cidade', 'like', 'a%')

      response.json(todosDados);
    }
}

export { Select }

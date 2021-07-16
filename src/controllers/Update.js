import knex from '../database/connection';

class Update {
  async nome(request, response){
    const { id } = request.params;
    const { nome } = request.body;

    await knex('dados').where('id', id).update({
      nome
    })

    response.json('Alterou');
  }
}

export { Update }

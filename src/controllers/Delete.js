import knex from '../database/connection';

class Delete {
  async deleteId(request, response){
    const { id } = request.params;

    await knex('dados').where('id', id).del();

    response.json({message: 'ID ' + id + ' foi deletado'})
  }
}

export { Delete }

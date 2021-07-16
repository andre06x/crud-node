import Knex from '../database/connection';

class PostService {
  async execute(data) {

    try {
      await Knex('dados').insert(data);
      return "Usuario cadastrado"

    } catch (err) {
      return err.message
    }

  }
}

export { PostService }


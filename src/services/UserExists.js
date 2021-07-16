import knex from '../database/connection';

export async function userExists(request, response, next){
  const { email } = request.body;

  const userEmail = await knex('dados').where('email', email);

  if(userEmail.length === 0){
    return next()
  }
  else {
    return response.json({message: 'Usuario ja cadastrado'})
  }
}

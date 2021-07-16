import { v4 } from 'uuid'
import { PostService } from '../services/PostService';
import moment from 'moment';


class Post {
  async create(request, response) {
    const { nome, sobrenome, email, gender, idade, cidade } = request.body;

    const data = {
      id: v4(),
      data_criacao: moment().format('YYYY-MM-DD'),
      nome, sobrenome, email, gender, cidade
    }

    const postService = new PostService();
    const tag = await postService.execute(data);

    return response.json({ message: tag });
  }

}

export { Post }

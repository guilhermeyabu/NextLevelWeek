import express, { response } from 'express'; 
import routes from './routes';
import path from 'path';

const app = express();

app.use(express.json());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

/**
 * Rota: Endereço completo da requisição
 * 
 * Recurso: Qual entidade estamos acessando do sistema
 * 
 * GET: Buscar informações
 * POST: Criar informações
 * PUT: Atualizar informações
 * DELETE: Deletar informações
 * 
 * Request Param: Parâmetros que vem na própria rota que identificam um recurso: /users/1
 * Query Param: Parâmetros que vem na rota para filtros, paginação
 * Request Body: Parâmetros para criar/atualizar infos.
 */

app.use(routes);

app.listen(3333);
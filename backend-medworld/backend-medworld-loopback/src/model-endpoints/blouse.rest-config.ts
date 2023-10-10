import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Blouse} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Blouse,
  pattern: 'CrudRest',
  dataSource: 'datasource_mysql',
  basePath: '/blouses',
  readonly: false,
};
module.exports = config;

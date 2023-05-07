import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Tenuebloc} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Tenuebloc,
  pattern: 'CrudRest',
  dataSource: 'datasource_mysql',
  basePath: '/tenueblocs',
  readonly: false,
};
module.exports = config;

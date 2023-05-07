import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceMysqlDataSource} from '../datasources';
import {Blouse, BlouseRelations} from '../models';

export class BlouseRepository extends DefaultCrudRepository<
  Blouse,
  typeof Blouse.prototype.identifiantBlouse,
  BlouseRelations
> {
  constructor(
    @inject('datasources.datasource_mysql') dataSource: DatasourceMysqlDataSource,
  ) {
    super(Blouse, dataSource);
  }
}

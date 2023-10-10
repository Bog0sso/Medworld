import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceMysqlDataSource} from '../datasources';
import {Tenuebloc, TenueblocRelations} from '../models';

export class TenueblocRepository extends DefaultCrudRepository<
  Tenuebloc,
  typeof Tenuebloc.prototype.identifiantTenue,
  TenueblocRelations
> {
  constructor(
    @inject('datasources.datasource_mysql') dataSource: DatasourceMysqlDataSource,
  ) {
    super(Tenuebloc, dataSource);
  }
}

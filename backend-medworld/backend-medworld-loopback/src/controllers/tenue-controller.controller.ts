import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Tenuebloc} from '../models';
import {TenueblocRepository} from '../repositories';

export class TenueControllerController {
  constructor(
    @repository(TenueblocRepository)
    public tenueblocRepository: TenueblocRepository,
  ) { }

  @post('/tenueblocs')
  @response(200, {
    description: 'Tenuebloc model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tenuebloc)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tenuebloc, {
            title: 'NewTenuebloc',
            exclude: ['identifiantTenue'],
          }),
        },
      },
    })
    tenuebloc: Omit<Tenuebloc, 'identifiantTenue'>,
  ): Promise<Tenuebloc> {
    return this.tenueblocRepository.create(tenuebloc);
  }

  @get('/tenueblocs/count')
  @response(200, {
    description: 'Tenuebloc model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tenuebloc) where?: Where<Tenuebloc>,
  ): Promise<Count> {
    return this.tenueblocRepository.count(where);
  }

  @get('/tenueblocs')
  @response(200, {
    description: 'Array of Tenuebloc model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tenuebloc, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tenuebloc) filter?: Filter<Tenuebloc>,
  ): Promise<Tenuebloc[]> {
    return this.tenueblocRepository.find(filter);
  }

  @patch('/tenueblocs')
  @response(200, {
    description: 'Tenuebloc PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tenuebloc, {partial: true}),
        },
      },
    })
    tenuebloc: Tenuebloc,
    @param.where(Tenuebloc) where?: Where<Tenuebloc>,
  ): Promise<Count> {
    return this.tenueblocRepository.updateAll(tenuebloc, where);
  }

  @get('/tenueblocs/{id}')
  @response(200, {
    description: 'Tenuebloc model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tenuebloc, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Tenuebloc, {exclude: 'where'}) filter?: FilterExcludingWhere<Tenuebloc>
  ): Promise<Tenuebloc> {
    return this.tenueblocRepository.findById(id, filter);
  }

  @patch('/tenueblocs/{id}')
  @response(204, {
    description: 'Tenuebloc PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tenuebloc, {partial: true}),
        },
      },
    })
    tenuebloc: Tenuebloc,
  ): Promise<void> {
    await this.tenueblocRepository.updateById(id, tenuebloc);
  }

  @put('/tenueblocs/{id}')
  @response(204, {
    description: 'Tenuebloc PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tenuebloc: Tenuebloc,
  ): Promise<void> {
    await this.tenueblocRepository.replaceById(id, tenuebloc);
  }

  @del('/tenueblocs/{id}')
  @response(204, {
    description: 'Tenuebloc DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tenueblocRepository.deleteById(id);
  }
}

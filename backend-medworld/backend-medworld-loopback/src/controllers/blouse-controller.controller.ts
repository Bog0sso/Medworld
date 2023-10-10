import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Blouse} from '../models';
import {BlouseRepository} from '../repositories';

export class BlouseControllerController {
  constructor(
    @repository(BlouseRepository)
    public blouseRepository : BlouseRepository,
  ) {}

  @post('/blouses')
  @response(200, {
    description: 'Blouse model instance',
    content: {'application/json': {schema: getModelSchemaRef(Blouse)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Blouse, {
            title: 'NewBlouse',
            exclude: ['identifiantBlouse'],
          }),
        },
      },
    })
    blouse: Omit<Blouse, 'identifiantBlouse'>,
  ): Promise<Blouse> {
    return this.blouseRepository.create(blouse);
  }

  @get('/blouses/count')
  @response(200, {
    description: 'Blouse model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Blouse) where?: Where<Blouse>,
  ): Promise<Count> {
    return this.blouseRepository.count(where);
  }

  @get('/blouses')
  @response(200, {
    description: 'Array of Blouse model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Blouse, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Blouse) filter?: Filter<Blouse>,
  ): Promise<Blouse[]> {
    return this.blouseRepository.find(filter);
  }

  @patch('/blouses')
  @response(200, {
    description: 'Blouse PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Blouse, {partial: true}),
        },
      },
    })
    blouse: Blouse,
    @param.where(Blouse) where?: Where<Blouse>,
  ): Promise<Count> {
    return this.blouseRepository.updateAll(blouse, where);
  }

  @get('/blouses/{id}')
  @response(200, {
    description: 'Blouse model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Blouse, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Blouse, {exclude: 'where'}) filter?: FilterExcludingWhere<Blouse>
  ): Promise<Blouse> {
    return this.blouseRepository.findById(id, filter);
  }

  @patch('/blouses/{id}')
  @response(204, {
    description: 'Blouse PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Blouse, {partial: true}),
        },
      },
    })
    blouse: Blouse,
  ): Promise<void> {
    await this.blouseRepository.updateById(id, blouse);
  }

  @put('/blouses/{id}')
  @response(204, {
    description: 'Blouse PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() blouse: Blouse,
  ): Promise<void> {
    await this.blouseRepository.replaceById(id, blouse);
  }

  @del('/blouses/{id}')
  @response(204, {
    description: 'Blouse DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.blouseRepository.deleteById(id);
  }
}

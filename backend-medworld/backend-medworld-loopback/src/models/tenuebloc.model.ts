import {Entity, model, property} from '@loopback/repository';

@model()
export class Tenuebloc extends Entity {
  // @property({
  //   type: 'string',
  //   required: true,
  // })
  // type: string;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'string',
    required: true,
  })
  prenom: string;

  @property({
    type: 'boolean',
    required: true,
  })
  sexe: boolean;

  @property({
    type: 'string',
    required: true,
  })
  couleur: string;

  @property({
    type: 'string',
    required: false,
  })
  logo: string;

  @property({
    type: 'number',
    required: true,
  })
  cou: number;

  @property({
    type: 'number',
    required: true,
  })
  epaule: number;

  @property({
    type: 'number',
    required: true,
  })
  poitrine: number;

  @property({
    type: 'number',
    required: true,
  })
  manche: number;

  @property({
    type: 'number',
    required: true,
  })
  tourManche: number;

  @property({
    type: 'number',
    required: true,
  })
  longueurHabit: number;

  @property({
    type: 'number',
    required: true,
  })
  ceinture: number;

  @property({
    type: 'number',
    required: true,
  })
  tourFesse: number;

  @property({
    type: 'number',
    required: true,
  })
  cuisse: number;

  @property({
    type: 'number',
    required: true,
  })
  longueurPantalon: number;

  @property({
    type: 'string',
    required: true,
  })
  couleurBordure: string;

  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuidv4',
  })
  identifiantTenue?: string;

  constructor(data?: Partial<Tenuebloc>) {
    super(data);
  }
}

export interface TenueblocRelations {
  // describe navigational properties here
}

export type TenueblocWithRelations = Tenuebloc & TenueblocRelations;

import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {mysql: {schema: 'medstyle', table: 'blouse_table'}},

})
export class Blouse extends Entity {
  @property({
    type: 'string',
    required: true,
    generated: true
  })
  modele: string;

  @property({
    type: 'string',
    required: true,
    generated: true
  })
  couleur: string;

  @property({
    type: 'string',
    required: true,
    generated: true
  })
  nom: string;

  @property({
    type: 'string',
    required: true,
    generated: true
  })
  prenom: string;

  @property({
    type: 'boolean',
    required: true,
    generated: true
  })
  sexe: boolean;

  @property({
    type: 'string',
    required: true,
    generated: true
  })
  telephone: string;

  @property({
    type: 'string',
    default: '-',
    generated: true
  })
  couleurBordure?: string;

  @property({
    type: 'string',
    required: true,
    generated: true
  })
  logo: string;

  @property({
    type: 'number',
    required: true,
    generated: true
  })
  cou: number;

  @property({
    type: 'number',
    required: true,
    generated: true
  })
  epaule: number;

  @property({
    type: 'number',
    required: true,
    generated: true
  })
  poitrine: number;

  @property({
    type: 'number',
    required: true,
    generated: true
  })
  manche: number;

  @property({
    type: 'number',
    required: true,
    generated: true
  })
  tourManche: number;

  @property({
    type: 'number',
    required: true,
    generated: true
  })
  longueurBlouse: number;

  @property({
    type: 'number',
    required: true,
    generated: true
  })
  tourFesse: number;

  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuidv4'
  })
  identifiantBlouse?: string;


  constructor(data?: Partial<Blouse>) {
    super(data);
  }
}

export interface BlouseRelations {
  // describe navigational properties here
}

export type BlouseWithRelations = Blouse & BlouseRelations;

import {Model, model, property} from '@loopback/repository';

@model()
export class Blouse extends Model {
  @property({
    type: 'string',
    required: true,
  })
  couleur: string;

  @property({
    type: 'boolean',
    required: true,
  })
  avecBordure: boolean;

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
    default: '-',
  })
  couleurBouton?: string;

  @property({
    type: 'string',
    required: true,
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
  longueurBlouse: number;

  @property({
    type: 'number',
    required: true,
  })
  tourFesse: number;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  identifiant?: string;


  constructor(data?: Partial<Blouse>) {
    super(data);
  }
}

export interface BlouseRelations {
  // describe navigational properties here
}

export type BlouseWithRelations = Blouse & BlouseRelations;

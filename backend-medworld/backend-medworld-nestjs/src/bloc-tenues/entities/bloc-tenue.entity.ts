import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class BlocTenue {
  @PrimaryGeneratedColumn()
  identifiantTenueBloc: string;

  @Column()
  modele: string;

  @Column()
  couleur: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  sexe: boolean;

  @Column()
  telephone: string;

  @Column()
  logo: string;

  @Column()
  cou: number;

  @Column()
  epaule: number;

  @Column()
  poitrine: number;

  @Column()
  manche: number;

  @Column()
  tourManche: number;

  @Column()
  longueurHabit: number;

  @Column()
  tourFesse: number;

  @Column()
  ceinture: number;

  @Column()
  cuisse: number;

  @Column()
  longueurPantalon: number;

  @Column()
  couleurBordure?: string;
}

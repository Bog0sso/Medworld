import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Blouse {
  @PrimaryGeneratedColumn()
  identifiantBlouse: string;

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
  couleurBordure?: string;

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
  longueurBlouse: number;

  @Column()
  tourFesse: number;
}

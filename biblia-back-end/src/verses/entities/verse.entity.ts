import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Verse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  chapter: number;

  @Column()
  number: number;

  @Column()
  content: string;
}

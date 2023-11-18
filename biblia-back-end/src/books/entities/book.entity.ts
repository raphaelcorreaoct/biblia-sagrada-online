import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  group: string;

  @Column()
  version: string;

  @Column()
  abbrev: string;

  @Column()
  chapters: number;

  @Column()
  testament: 'NT' | 'VT';
}

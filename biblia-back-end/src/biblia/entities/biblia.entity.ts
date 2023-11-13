import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Biblia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  section: 'Novo Testamento' | 'Velho Testamento';

  @Column()
  book: string;

  @Column()
  chapter: number;

  @Column()
  verse: number;

  @Column()
  description: string;

  @Column()
  content: string;
}

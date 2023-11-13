export class Biblia {
  id: number;
  section: 'Novo Testamento' | 'Velho Testamento';
  book: string;
  chapter: number;
  verse: number;
  description: string;
  content: string;
}

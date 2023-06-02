export class Card {
  id!: string;
  title!: string;
  description!: string;
  status!: string;
}

export class Subjects {
  constructor(public subject: string) {}
}

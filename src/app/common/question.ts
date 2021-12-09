export interface Question {
  id: number;
  content: string;
  image: string;
  type: number;
  answer: Array<Answer>;
}

export interface Answer{
  id: number;
  content: string;
  your_choose: boolean;
}

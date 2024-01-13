export interface IGrades {
  id: string;
  nota: number;
  bimestre: Bimestre;
  disciplina: Disciplina;
  criadoEm: string;
  atualizadoEm: string;
}

export enum Bimestre {
  PRIMEIRO = 'PRIMEIRO',
  SEGUNDO = 'SEGUNDO',
  TERCEIRO = 'TERCEIRO',
  QUARTO = 'QUARTO'
}

export enum Disciplina {
  ARTES = 'Artes',
  BIOLOOGIA = 'Biologia',
  GEOGRAFIA = 'Geografia',
  SOCIOLOGIA = 'Sociologia'
}
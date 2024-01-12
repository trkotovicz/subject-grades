export interface IGrades {
  id: string;
  nota: number;
  bimestre: Bimestre;
  disciplina: Disciplina;
  criadoEm: string;
  atualizadoEm: string;
}

enum Bimestre {
  PRIMEIRO = 'PRIMEIRO',
  SEGUNDO = 'SEGUNDO',
  TERCEIRO = 'TERCEIRO',
  QUARTO = 'QUARTO'
}

enum Disciplina {
  ARTES = 'Artes',
  BIOLOOGIA = 'Biologia',
  GEOGRAFIA = 'Geografia',
  SOCIOLOGIA = 'Sociologia'
}
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";

export enum Bimestre {
  PRIMEIRO = "PRIMEIRO",
  SEGUNDO = "SEGUNDO",
  TERCEIRO = "TERCEIRO",
  QUARTO = "QUARTO",
}

export enum Disciplina {
  BIOLOGIA = "Biologia",
  ARTES = "Artes",
  GEOGRAFIA = "Geografia",
  SOCIOLOGIA = "Sociologia",
}

@Entity()
@Unique(["bimestre", "disciplina"])
export abstract class Resultado {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "float", nullable: false })
  nota: number;

  @Column({ type: "enum", enum: Bimestre, nullable: false })
  bimestre: Bimestre;

  @Column({ type: "enum", enum: Disciplina, nullable: false })
  disciplina: Disciplina;

  @CreateDateColumn()
  criadoEm: Date;

  @UpdateDateColumn()
  atualizadoEm: Date;
}

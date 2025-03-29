import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Mission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  description: string;

  @Column()
  technics: string;

  @Column()
  tjm: number;
}

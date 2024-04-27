import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hologram {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  weight: number;

  @Column()
  superPower: string;

  @Column({ nullable: true })
  extinctSince?: string;
}

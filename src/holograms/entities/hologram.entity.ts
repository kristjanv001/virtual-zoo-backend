import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hologram {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  weight: number;

  @Column()
  superPower: string;

  @Column({ nullable: true })
  extinctSince?: string;
}

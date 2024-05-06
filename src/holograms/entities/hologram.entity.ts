import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from "typeorm";
import { Tag } from "./tag.entity";

@Entity()
export class Hologram {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: "decimal", precision: 6, scale: 2 })
  weight: number;

  @Column()
  superPower: string;

  @Column({ nullable: true })
  extinctSince?: string;

  @JoinTable()
  @ManyToMany((type) => Tag, (tag) => tag.holograms, {
    cascade: true
  })
  tags: Tag[];
}

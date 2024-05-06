import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Hologram } from "./hologram.entity";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Hologram, (hologram) => hologram.tags)
  holograms: Hologram[];
}

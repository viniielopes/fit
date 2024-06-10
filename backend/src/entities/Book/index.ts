import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity('book')
export class Book {
  @PrimaryGeneratedColumn('increment')
  id!: number | string;

  @Column({ length: 50 })
  titulo!: string;

  @Column({
    length: 100,
  })
  autor!: string;

  @Column({ type: 'text' })
  descricao!: string;

  @Column()
  dataPublicacao!: Date;

  @Column({ type: 'text' })
  imagemCapa!: string;

  @Column({ type: 'text' , nullable: true })
  imageURL!: string;

  @DeleteDateColumn()
  deletedAt!: Date;
}

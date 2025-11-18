import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Group } from './Group.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  uuid: string | undefined;  // Change from string | number to just string
  
  @PrimaryColumn()
  id: number | undefined;
  
  @Column()
  firstName: string | undefined;
  
  @Column()
  lastName: string | undefined;
  
  @Column()
  middleName: string | undefined;
  
  @Column({ nullable: true })
  contacts?: string;
  
  @Column()
  groupId!: number;

  @ManyToOne(() => Group, { nullable: true })
@JoinColumn({ name: 'groupId' })
  group?: Group;
}

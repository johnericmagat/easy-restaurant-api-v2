import { Entity, PrimaryGeneratedColumn, Column, Double, ManyToOne } from "typeorm"

@Entity()
export class mst_user {
    @PrimaryGeneratedColumn()
    id: number

    @Column("nvarchar", {length:50 , nullable: false})
    user_name: string

    @Column("nvarchar", {length:50 , nullable: false})
    password: string

    @Column("nvarchar", {length:255 , nullable: false})
    full_name: string

    @Column("nvarchar", {length:255 , nullable: true})
    user_card_number: string

    @Column("nvarchar", {length:255 , nullable: true})
    designation: string

    @Column()
    entry_user_id: number

    @Column({type: 'datetime', nullable: true})
    entry_date_time: Date

    @Column()
    update_user_id: number

    @Column({type: 'datetime', nullable: true})
    update_date_time: Date

    @Column("bit", {nullable: false})
    is_locked: boolean

    @Column("nvarchar", {length:128 , nullable: true})
     asp_net_user_id: string

     @Column("nvarchar", {length:50 , nullable: true})
     user_pin: string
}

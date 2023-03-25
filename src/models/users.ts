import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: 'users',
})
export class User extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastname!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstname!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email!: string;
}
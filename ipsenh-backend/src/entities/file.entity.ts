import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'file'})
class FileEntity {

    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'file_id'
    })
    public id: number;

    @Column()
    filename: string;

    @Column({
        type: 'bytea'
    })
    data: Uint8Array;

}

export default FileEntity;

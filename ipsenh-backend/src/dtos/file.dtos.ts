import {IsNotEmpty} from "class-validator";

export class FileDto {

    constructor(file: Buffer) {
        this.file = file;
    }

    @IsNotEmpty()
    file: Buffer;
}

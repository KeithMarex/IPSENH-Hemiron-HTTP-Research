import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {FileEntity} from "../../../../typeorm/index";
import {Repository} from "typeorm";
const fs = require('fs');

@Injectable()
export class FilesService {
    constructor(@InjectRepository(FileEntity) private fileRepo: Repository<FileEntity>) {}

    async saveFile(imageBuffer: Buffer, filename: string) {
        const newFile = await this.fileRepo.create({
            filename,
            data: imageBuffer
        })
        await this.fileRepo.save(newFile);
        return newFile;
    }

    retrieveFile(id: number) {
        return this.fileRepo.findOne({where: {id: id}});
    }

    retrieveStaticFile(id: number): Uint8Array {
        return fs.readFileSync(`./src/assets/export/${id}.png`);
    }
}

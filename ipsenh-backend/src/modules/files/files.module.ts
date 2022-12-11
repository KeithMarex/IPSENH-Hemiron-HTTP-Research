import { Module } from '@nestjs/common';
import { FilesController } from './controllers/files/files.controller';
import { FilesService } from './services/files/files.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {FileEntity} from "../../typeorm/index";

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  imports: [
    TypeOrmModule.forFeature([FileEntity]),
  ]
})
export class FilesModule {}

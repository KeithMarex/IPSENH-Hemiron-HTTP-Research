import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Response,
    Res,
    StreamableFile,
    UploadedFile,
    UseInterceptors, Body
} from '@nestjs/common';
import {FilesService} from "../../services/files/files.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {Readable} from "stream";

@Controller('files')
export class FilesController {
    constructor(private readonly fileService: FilesService) {
    }

    @Get(':id')
    async getFile(@Param('id', ParseIntPipe) id: number, @Response({passthrough: true}) res) {
        const file = await this.fileService.retrieveFile(id);

        const stream = Readable.from(file.data);

        res.set({
            'Content-Disposition': `inline; filename="${file.filename}"`,
            'Content-Type': 'image'
        })

        return new StreamableFile(stream);
    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    saveFile(@UploadedFile() file: Express.Multer.File){
        return this.fileService.saveFile(file.buffer, file.originalname);
    }

    @Get('/static/:id')
    async getSlicedImage(@Param('id', ParseIntPipe) id: number, @Response({passthrough: true}) res){
        const file = this.fileService.retrieveStaticFile(id);

        const stream = Readable.from(file);

        res.set({
            'Content-Disposition': `inline; filename="${id}.png"`,
            'Content-Type': 'image/png',
        })

        return new StreamableFile(stream);
    }

}

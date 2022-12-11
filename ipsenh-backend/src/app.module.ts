import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import { FilesModule } from './modules/files/files.module';
import entities from './typeorm/index'

@Module({
  imports: [
      ConfigModule.forRoot({isGlobal: true}),
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
              return {
                  type: "postgres",
                  host: configService.get('DB_HOST'),
                  port: +configService.get<number>('DB_PORT'),
                  username: configService.get('DB_USERNAME'),
                  password: configService.get('DB_PASSWORD'),
                  database: configService.get('DB_NAME'),
                  entities: entities,
                  migrations: ['dist/migration/**/*{.ts,.js}'],
                  synchronize: true,
                  migrationsRun: false,
              }
          },
      }),
      FilesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import {NestApplication, NestFactory} from '@nestjs/core';
import { AppModule } from './app.module';
import {ExpressAdapter} from "@nestjs/platform-express";
import {Express} from "express";
const fs = require('fs');
import {Server, ServerOptions, createServer} from 'spdy'
import {Logger} from "@nestjs/common";
import * as http from "http";

const express = require('express');
const expressApp: Express = express();

async function bootstrapHTTP1() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(3000);
  Logger.log('HTTP/1.1 App running on port 3000!')
}
// bootstrapHTTP1();

async function bootstrapHTTP2SPDY(){

  const httpOptions: ServerOptions = {
    key: fs.readFileSync('./test.key'),
    cert: fs.readFileSync('./test.crt'),
  };

  const server: Server = createServer(httpOptions, expressApp);

  const app: NestApplication = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));

  app.enableCors();

  await app.init();
  await server.listen(3001);
  Logger.log('HTTP/2 App running on port 3001!')

}
// bootstrapHTTP2SPDY();

const runMultiple = async () => {
  const httpOptions: ServerOptions = {
    key: fs.readFileSync('./localhost.key'),
    cert: fs.readFileSync('./localhost.crt'),
  };

  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.enableCors();
  await app.init();

  http.createServer(server).listen(3000);
  createServer(httpOptions, server).listen(3001);
}

runMultiple();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Liquid } from 'liquidjs';

async function createApp(): Promise<NestExpressApplication> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('./public');
  app.setBaseViewsDir('./views');

  const engine = new Liquid();
  app.engine('liquid', engine.express());
  app.set('view engine', 'liquid');

  return app;
}

async function nestStart() {
  const app = await createApp();
  await app.listen(3000);
}

export let viteNodeApp: Promise<NestExpressApplication>;

if (false) {
  nestStart();
} else {
  viteNodeApp = createApp();
}
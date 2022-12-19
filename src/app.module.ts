import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './shared/sqlite3.module';
import { DomainModule } from './domain/domain.module';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [PresentationModule, DomainModule, TypeOrmModule.forRoot(config)],
  controllers: [],
  providers: [],
})
export class AppModule {}

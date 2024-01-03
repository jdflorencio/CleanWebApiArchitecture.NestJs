import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { ProjectsWithUseCaseController } from './projects-with-use-case.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { CreateProjectUseCase } from './use-cases/create-project.use-case';
import { FindAllProjectUseCase } from './use-cases/find-all-project.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [
    //ProjectsController,
    ProjectsWithUseCaseController,
  ],
  providers: [ProjectsService, CreateProjectUseCase, FindAllProjectUseCase],
})
export class ProjectsModule {}

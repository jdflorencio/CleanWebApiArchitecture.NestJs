import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';

import { CreateProjectDto } from './dto/create-project.dto';
import { StartProjectDto } from './dto/start-project.dto';

import { CreateProjectUseCase } from './use-cases/create-project.use-case';
import { FindAllProjectUseCase } from './use-cases/find-all-project.use-case';
import { StartProjectUseCase } from './use-cases/start-project.use-case';
import { FindByIdProjectUseCase } from './use-cases/find-by-id-project.use-case';

@Controller('projects')
export class ProjectsWithUseCaseController {
  @Inject(CreateProjectUseCase)
  private readonly createdProjectUseCase: CreateProjectUseCase;

  @Inject(FindAllProjectUseCase)
  private readonly findAllProjectUseCase: FindAllProjectUseCase;

  @Inject(StartProjectUseCase)
  private readonly startProjectUseCase: StartProjectUseCase;

  @Inject(FindByIdProjectUseCase)
  private readonly findByIdProjectUseCase: FindByIdProjectUseCase;

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.createdProjectUseCase.execute(createProjectDto);
  }

  @Get()
  findAll() {
    return this.findAllProjectUseCase.execute();
  }

  @Post(':id/start')
  start(@Param('id') id: string, @Body() startProjectDto: StartProjectDto) {
    return this.startProjectUseCase.execute(id, startProjectDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findByIdProjectUseCase.execute(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateProjectDto } from './dto/create-project.dto';

import { CreateProjectUseCase } from './use-cases/create-project.use-case';
import { FindAllProjectUseCase } from './use-cases/find-all-project.use-case';

@Controller('projects')
export class ProjectsWithUseCaseController {
  constructor(
    private readonly createdProjectUseCase: CreateProjectUseCase,
    private readonly findAllProjectUseCase: FindAllProjectUseCase,
  ) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.createdProjectUseCase.execute(createProjectDto);
  }

  @Get()
  findAll() {
    return this.findAllProjectUseCase.execute();
  }

  /*

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(id);
  }
  */
}

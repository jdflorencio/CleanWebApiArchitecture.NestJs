import { Repository } from 'typeorm';
import { CreateProjectDto } from '../dto/create-project.dto';
import { Project } from '../entities/project.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable() //para permitir que isso vire um serviços
export class CreateProjectUseCase {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
  ) {}
  execute(input: CreateProjectDto) {
    const project = new Project(input);
    project.start(input.started_at);

    return this.projectRepo.save(project);
  }
}

import { CreateProjectDto } from '../dto/create-project.dto';
import { Project } from '../entities/project.entity';
import { Inject, Injectable } from '@nestjs/common';
import { IProjectRepository } from '../project.repository';

@Injectable() //para permitir que isso vire um serviços
export class CreateProjectUseCase {
  @Inject('IProjectRepository')
  private readonly projectRepo: IProjectRepository;

  async execute(input: CreateProjectDto) {
    const project = new Project(input);
    await this.projectRepo.create(project);
    return project;
  }
}

//Arquiterua Hexagonal
// a inversao de dependencia
//na camada de aplicação temos que interagir - ports and adaptadores

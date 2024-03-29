import { Inject, Injectable } from '@nestjs/common';
import { IProjectRepository } from '../project.repository';

@Injectable() //para permitir que isso vire um serviços
export class FindAllProjectUseCase {
  @Inject('IProjectRepository')
  private readonly projectRepo: IProjectRepository;

  async execute() {
    return await this.projectRepo.findAll();
  }
}

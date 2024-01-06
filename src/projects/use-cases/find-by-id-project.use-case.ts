import { Inject, Injectable } from '@nestjs/common';
import { IProjectRepository } from '../project.repository';

@Injectable() //para permitir que isso vire um serviços
export class FindByIdProjectUseCase {
  @Inject('IProjectRepository')
  private readonly projectRepo: IProjectRepository;

  async execute(id: string) {
    return await this.projectRepo.findById(id);
  }
}

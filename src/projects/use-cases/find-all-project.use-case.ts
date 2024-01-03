import { Repository } from 'typeorm';
import { Project } from '../entities/project.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable() //para permitir que isso vire um serviços
export class FindAllProjectUseCase {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
  ) {}
  execute() {
    return this.projectRepo.find();
  }
}

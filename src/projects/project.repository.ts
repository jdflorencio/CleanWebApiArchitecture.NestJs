import { Inject, Injectable } from '@nestjs/common';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export interface IProjectRepository {
  create(project: Project): Promise<void>;
  update(project: Project): Promise<void>;
  findAll(): Promise<Project[]>;
  findById(id: string): Promise<Project>;
}

@Injectable()
export class ProjectTypeOrmRepository implements IProjectRepository {
  constructor(
    @InjectRepository(Project)
    private typeOrmRepo: Repository<Project>,
  ) {}
  async create(project: Project): Promise<void> {
    await this.typeOrmRepo.save(project);
  }

  async update(project: Project): Promise<void> {
    await this.typeOrmRepo.update(project.id, project);
  }

  async findAll(): Promise<Project[]> {
    return await this.typeOrmRepo.find();
  }

  async findById(id: string): Promise<Project> {
    return await this.typeOrmRepo.findOneOrFail({ where: { id } });
  }
}

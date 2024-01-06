import { StartProjectDto } from '../dto/start-project.dto';
import { IProjectRepository } from '../project.repository';
import { Inject } from '@nestjs/common';

// Solid =
export class StartProjectUseCase {
  @Inject('IProjectRepository')
  private readonly projectRepo: IProjectRepository;

  async execute(id: string, input: StartProjectDto) {
    const project = await this.projectRepo.findById(id);

    project.start(input.started_at);

    await this.projectRepo.update(project);

    return project;
  }
}

//duplicao de codigo
// intencional
// acidental

//um use case represnta uma intenção de um usuario
//serive layer VS use case

//Solid = S -> single responsability =: que eu devo ter apenas um motivo para mudança.
// Solid = D -> Dependency inversion =: depender de abstrações (interface ) ao inves de implementações

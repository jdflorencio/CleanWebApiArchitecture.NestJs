import { InjectRepository } from '@nestjs/typeorm';
import { StartProjectDto } from '../dto/start-project.dto';
import { Project } from '../entities/project.entity';
import { Repository } from 'typeorm';


// Solid = 
export class StartProjectUseCase {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
  ) {}

  async execute(id: string, input: StartProjectDto) {
    const project = await this.projectRepo.findOneOrFail({ where: { id } });

    project.start(input.started_at);

    return this.projectRepo.save(project);
  }
}

//duplicao de codigo
// intencional
// acidental


//um use case represnta uma intenção de um usuario
//serive layer VS use case

//Solid = S -> single responsability =: que eu devo ter apenas um motivo para mudança.
// Solid = D -> Dependency inversion =: depender de abstrações (interface ) ao inves de implementações
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

#Sobre esse Porjeto

Este projeto foi baseado em um estudo sobre CLEAN ARCHITECTURE


## Estruturação das pastas
```bash
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   └── projects
│       ├── dto
│       │   ├── create-project.dto.ts
│       │   ├── start-project.dto.ts
│       │   └── update-project.dto.ts
│       ├── entities
│       │   └── project.entity.ts
│       ├── project.repository.ts
│       ├── projects-with-use-case.controller.ts
│       ├── projects.controller.spec.ts
│       ├── projects.controller.ts
│       ├── projects.module.ts
│       ├── projects.service.spec.ts
│       ├── projects.service.ts
│       └── use-cases
│           ├── create-project.use-case.ts
│           ├── find-all-project.use-case.ts
│           ├── find-by-id-project.use-case.ts
│           └── start-project.use-case.ts

```

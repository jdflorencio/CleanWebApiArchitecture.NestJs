<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Sobre esse Projeto

Este repositório contém um projeto implementado utilizando o conceito de Clean Architecture com NestJS. A arquitetura do projeto é organizada de forma modular, seguindo as diretrizes da Clean Architecture para promover a separação de preocupações e a manutenibilidade do código.

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

Este projeto segue as práticas da Clean Architecture, mantendo a lógica de negócios isolada nos casos de uso (use cases), a manipulação de dados no repositório, e a exposição de endpoints na camada de controladores. Isso proporciona uma estrutura robusta e escalável para o desenvolvimento de aplicativos em NestJS.





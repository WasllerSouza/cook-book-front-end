![maintained-shield]
![Stargazers][stars-shield]
Wasller Souza: [![LinkedIn][linkedin-shield]][linkedin-url-wasller]
Weuller Souza: [![LinkedIn][linkedin-shield]][linkedin-url-weuller]

<details open="open">
  <summary>Conteudo</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#build-status">Build Status</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#requisitos">Requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#licença">Licença</a></li>
    <li><a href="#agradecimentos">Agradecimentos</a></li>
    <li><a href="#autores">Autores</a></li>
  </ol>
</details>

## Sobre o projeto

Este projeto é uma aplicação em Angular 16 que foi construída utilizando uma arquitetura de pastas para organização e reuso de componentes, bem como aplicações de padrões de projetos.

Implementei este projeto com o objetivo de compartilhar meu conhecimento e aplicar o aprendizado sobre os padrões de projetos como forma de estudo.

Aplicação desenvolvida com foco na facilidade de uso e na organização, esta aplicação permite aos usuários cadastrar, armazenar e explorar uma variedade de receitas culinárias de forma intuitiva.

Principais funcionalidades:

  1. Cadastro de Receitas: Os usuários podem inserir detalhes completos das receitas, incluindo nome, ingredientes, instruções passo a passo, tempo de preparo e categorias.

  2. Pesquisa e Filtragem: Uma funcionalidade de pesquisa poderosa permite aos usuários encontrar rapidamente receitas específicas ou filtrá-las por categoria, ingredientes principais, tempo de preparo, entre outros critérios.

  3. Visualização Detalhada: As receitas são exibidas em um formato fácil de ler, com imagens atraentes, lista de ingredientes e instruções claras.

  4. Interface Responsiva: A aplicação é projetada para funcionar perfeitamente em dispositivos móveis e desktops, garantindo uma experiência consistente para todos os usuários.

Esta aplicação foi criada com paixão pela culinária e pela tecnologia, proporcionando aos amantes da comida um local centralizado para armazenar e descobrir novas receitas. Explore, cozinhe e compartilhe suas delícias culinárias com facilidade e estilo!

Este projeto é bem simples, ele é pequeno, mas eu abordo aqui varias técnicas de programação, tais como: princípios SOLID, integração com Sonarclound para manter uma boa qualidade de código.

Esta API permite que o usuário se cadastre e faça controle de suas receitas de cozinha preferidas, podendo criar uma receita com título, ingredientes e modo de preparo. Cada receita recebe uma classificação para tornar fácil o filtro (café da manhã, almoço, sobremesa, jantar), pode ser editada e/ou excluída.

### Build Status

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=WasllerSouza_cook-book-front-end&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=WasllerSouza_cook-book-front-end)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=WasllerSouza_cook-book-front-end&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=WasllerSouza_cook-book-front-end)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=WasllerSouza_cook-book-front-end&metric=bugs)](https://sonarcloud.io/summary/new_code?id=WasllerSouza_cook-book-front-end)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=WasllerSouza_cook-book-front-end&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=WasllerSouza_cook-book-front-end)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=WasllerSouza_cook-book-front-end&metric=coverage)](https://sonarcloud.io/summary/new_code?id=WasllerSouza_cook-book-front-end)

### Built With

![windows-shield] ![ubuntu-shield] ![figma-shield] ![visualstudio-shield] ![angular-shield] ![sonarclound-shield]

### Features

- Registrar usuário;
- Criar minhas próprias receitas;
- Adicionar categoria nas receitas para facilitar o filtro;
- Compartilhar minhas receitas com amigos;
- Adicionar amigos usando WebSocket para aceitar conexão em tempo real.

E outras.

## Getting Started

### Requisitos

* Visual Studio Code ou Intellij Idea

* Node js V18+

### Instalação

1. Faça o clone do repositório
   ```sh
   git clone https://github.com/WasllerSouza/cook-book-front-end.git
   ```
2. Faça o install dos pacotes
   ```sh
   npm install
   ```.
4. Execute a applicação

 ```sh
   npm run start
   ```
6. Ótimo teste :)


## Roadmap

Você pode acompanhar as correções e problemas encontrados neste projeto [open issues](https://github.com/WasllerSouza/cook-book-front-end/issues) e ver as novas funcionalidades que serão desenvolvidas e até mesmo as que estão em desenvolvimento.


## Licença

Sinta-se livre para usar este projeto para estudar e aprender. Você não tem permissão para utiliza-lo para distribuição ou comercialização.

## ✒Autores 
| Papel                   | Nome                              | Contato                                           | 
| ----------------------- | --------------------------------- | --------------------------------------------------| 
| Dev Front               | Wasller Luduvico Meireles Souza   | [WasllerSouza](https://github.com/WasllerSouza)   |
| Dev Front               | Weuller Luduvico Meireles Souza   | [weu-souza](https://github.com/weu-souza)         |




<!-- Shields build with -->
[windows-shield]: https://img.shields.io/badge/Windows-00599E?style=for-the-badge&logo=windows&logoColor=white

[ubuntu-shield]: https://img.shields.io/badge/Ubuntu-93300A?style=for-the-badge&logo=ubuntu&logoColor=white

[figma-shield]: https://img.shields.io/badge/Figma-353535?style=for-the-badge&logo=figma&logoColor=white

[visualstudio-shield]: https://img.shields.io/badge/Visual_Studio_Code-00599E?style=for-the-badge&logo=visual%20studio%20code&logoColor=white

[angular-shield]: https://img.shields.io/badge/Angular_16-AA2E00?style=for-the-badge&logo=Angular&logoColor=white

[sonarclound-shield]: https://img.shields.io/badge/Sonarcloud-000000?style=for-the-badge&logo=Sonarcloud&logoColor=white

<!-- Shields about the project -->
[maintained-shield]: https://img.shields.io/badge/Maintained%3F-yes-314100.svg?style=for-the-badge

[stars-shield]: https://img.shields.io/github/stars/welissonArley/Timerom.svg?style=for-the-badge&color=03146F

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

<!-- Urls -->
[linkedin-url-wasller]: https://www.linkedin.com/in/wasller-souza-4288ba18a/
[linkedin-url-weuller]: https://linkedin.com/in/weuller-souza-6b49aa120/

[stars-shield]: https://img.shields.io/github/stars/welissonArley/Timerom.svg?style=for-the-badge&color=03146F

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555


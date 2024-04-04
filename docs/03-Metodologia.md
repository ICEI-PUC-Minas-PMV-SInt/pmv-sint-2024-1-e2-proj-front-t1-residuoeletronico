
# Metodologia

O projeto foi elaborado por meio da utilização de várias ferramentas para auxiliar na implementação do código-fonte, design de interface, comunicação e gestão do time. A seguir, estarão listadas as tecnologias e procedimentos pertinentes ao projeto e suas descrições.

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o [Github](https://github.com) foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma nova funcionalidade precisa ser introduzida ou melhorada

O projeto foi configurado no GitHub por meio de um repositório template contendo a estrutura básica de diretórios referentes a: documentação (**docs**), apresentação e descrição do projeto (**presentation**) e código-fonte (**src**). 

No que diz respeito às **branches**, elas são manipuladas da seguinte forma: Todos os **commits** (desenvolvimento e testes ) são feito na  branch `dev` . Após se ter disponível um pacote de funcionalidades mínimas testadas o time efetua o **merge** do conteúdo para a branch `main`, onde estará o código-fonte do projeto em pleno funcionamento.

## Gerenciamento de Projeto

### Divisão de Papéis

A divisão de papeis do time de desenvolvimento foi feito baseado no método ágil SCRUM.

- Scrum Master: 
  - Andressa
- Product Owner: 
  - Lorena
- Equipe de desenvolvimento:
  - Geisson
  - Andressa
  - Lorena
  - Isabela
- Equipe de design:
  - Geisson
  - Andressa
  - Lorena
  - Isabela

### Processo

Para organização e distribuição das tarefas entre os integrantes a equipe utilizou o GitHub Projects com o sistema de organização e gestão do trabalho [Kamban](https://github.com/orgs/ICEI-PUC-Minas-PMV-SInt/projects/27/views/2). A seguir, estão listadas e descritas as categorias definidas para controlar o status das tarefas de trabalho.

- **To Do**: Representa o Backlog e contem as atividades que estão definidas para serem iniciadas.
- **In progress**: Lista de atividades em processo de implementação e que não estão finalizadas.

- **Blocked**: Lista de atividades que por algum problema estão impedidas de serem prosseguidas ou  concluídas.
- **Done**: Tarefas que passaram pelos testes de controle de qualidade e estão prontos para ser entregues ao usuário. 

Link para o Kamban do projeto [ReciclaMais](https://github.com/orgs/ICEI-PUC-Minas-PMV-SInt/projects/27/views/2).

### Ferramentas

As ferramentas empregadas no desenvolvimento do projeto e sua função de uso estão relacionadas na tabela a seguir.

| Ferramenta                                                   | Função                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Visual Studio Code](https://code.visualstudio.com/)         | Editor de código-fonte                                       |
| [Git](https://code.visualstudio.com/)/[GitHub](https://code.visualstudio.com/) | Controle de versionamento de código-fonte                    |
| [GitHub Projects](https://github.com/orgs/ICEI-PUC-Minas-PMV-SInt/projects/27/views/2) | Organização e gestão do trabalho                             |
| [MS Teams](https://www.microsoft.com/pt-br/microsoft-teams/group-chat-software) | Comunicação do time                                          |
| [Figma](https://www.figma.com/)                              | Design, prototipação de wireframes, userflow e desenvolvimento de diagramas |
| [MarvelApp](https://marvelapp.com/)                          | Criação do fluxo interativo dos wireframes                   |

O editor de código Visual Studio Code foi escolhido porque ele possui uma integração com o sistema de versão, integração com extensões que auxiliam na produtividade de código, além de ser uma aplicação leve e amplamente utilizada e já consolidada no mercado de desenvolvimento de software.

Para o versionamento de código-fonte o Git foi adotado, pois é o maior sistema de controle de versões distribuído que existe e possui extensa documentação para treinamento de uso no time de envolvedores. 

O GitHub, por sua vez, é a maior plataforma de hospedagem de repositórios Git utilizado no mercado, possui uma interface intuitiva e muito eficiente para a visualização dos arquivos de código.  Além disso, ele oferece o GitHub Projects que é uma funcionalidade do GitHub capaz de dar muita flexibilidade e eficiência na organização e gestão das tarefas de desenvolvimento, fornecendo uma interface bem informativa sobre a distribuição e cronograma da sprint.

A comunicação do time o Microsoft Teams foi a ferramenta utilizada devido possibilidade de agendar e criar reuniões de forma muito simples e com muita qualidade de transmissão de vídeo. Além disso, a ferramenta é multi-plataforma, o que permite que seja usado tanto em desktop quanto em mobile. 

Para o desenvolvimento dos wireframes o Figma foi escolhido, pois possui todos os recurso necessários para o design dos layouts. E o Marvel, pois permite a criação do fluxo interativo de wireframes de forma muito prática.

# Estudo de Git & GitHub 🚀

Este repositório foi criado para documentar e organizar meus estudos sobre controle de versão com **Git** e hospedagem de código no **GitHub**. Aqui você encontrará os principais comandos, fluxos de trabalho e boas práticas que estou aprendendo.

## 📌 Conteúdo
- [Configurações Iniciais](#configurações-iniciais)
- [Principais Comandos Git](#principais-comandos-git)
- [Trabalhando com Repositórios Remotos](#trabalhando-com-repositórios-remotos)
- [Fluxo de Branching](#fluxo-de-branching)
- [Dicas de Boas Práticas](#dicas-de-boas-práticas)

---

## 🛠️ Configurações Iniciais
Antes de começar, é necessário configurar sua identidade:
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"

💻 Principais Comandos Git
Comando	Descrição
git init	Inicializa um novo repositório local
git status	Verifica o estado atual dos arquivos (staged, modified, etc)
git add .	Adiciona todos os arquivos alterados para a área de preparação
git commit -m "mensagem"	Salva as alterações localmente com uma descrição
git log	Exibe o histórico de commits
git diff	Mostra as diferenças entre as versões dos arquivos
🌐 Trabalhando com Repositórios Remotos

Para conectar seu projeto ao GitHub:

    Adicionar o repositório remoto:
    Bash

    git remote add origin [https://github.com/gregorioponciano/git-github.git](https://github.com/gregorioponciano/git-github.git)

    Enviar alterações pela primeira vez:
    Bash

    git push -u origin main

    Atualizar seu repositório local:
    Bash

    git pull origin main

🌿 Fluxo de Branching (Ramificação)

Para trabalhar em novas funcionalidades sem afetar o código principal:

    Criar nova branch: git checkout -b nome-da-feature

    Voltar para a main: git checkout main

    Unir alterações (Merge): git merge nome-da-feature

📝 Licença

Este projeto está sob a licença MIT - veja o arquivo LICENSE para detalhes.
👤 Autor

Desenvolvido por Gregório Ponciano.

    LinkedIn

    Instagram

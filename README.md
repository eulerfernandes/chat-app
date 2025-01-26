# Projeto: Sistema de Chat em Tempo Real

## 📌 Visão Geral

Este projeto é um **sistema de chat em tempo real** desenvolvido para o teste técnico da Labzz. A aplicação é Full Stack e implementa uma arquitetura robusta e escalável, utilizando tecnologias modernas para backend e frontend.

## 🛠️ Tecnologias Utilizadas

### **Backend:**

- Node.js com TypeScript
- Express.js para API REST
- PostgreSQL com Sequelize ORM
- Redis para caching
- Elasticsearch para busca avançada
- Socket.io para comunicação em tempo real
- JSON Web Token (JWT) para autenticação segura


### **DevOps & Segurança:**

- Docker para containerização
- CI/CD com GitHub Actions
- Prevenção contra SQL Injection, XSS e CSRF
- Monitoramento com logging estruturado

## 🚀 Funcionalidades Principais

✅ Cadastro e login de usuários com autenticação JWT e OAuth2
✅ Chat em tempo real com WebSockets
✅ Histórico de mensagens com paginação
✅ Busca avançada de mensagens e usuários via Elasticsearch
✅ Notificações de digitação em tempo real
✅ UI responsiva e acessível (WCAG 2.1)
✅ Modo escuro e animações suaves
✅ Testes unitários, de integração e E2E

## 📂 Estrutura do Projeto

```
📦 chat-app
├── 📁 backend
│   ├── 📁 src
│   │   ├── 📁 config  # Configurações do banco, Redis, Elasticsearch
│   │   ├── 📁 controllers  # Lógica dos endpoints
│   │   ├── 📁 middleware  # Autenticação, segurança
│   │   ├── 📁 models  # Definição das tabelas
│   │   ├── 📁 routes  # Rotas da API
│   │   ├── 📁 services  # Serviços auxiliares
│   │   ├── 📄 server.ts  # Inicialização da API
│   ├── 📄 Dockerfile
│   ├── 📄 package.json
├
├── 📄 docker-compose.yml  # Orquestração dos serviços
├── 📄 README.md
```

## 🏗️ Como Rodar o Projeto

### **Pré-requisitos**

- Node.js v18+
- Docker e Docker Compose
- PostgreSQL e Redis

### **1️⃣ Configuração do Banco de Dados**

Se estiver usando Docker, basta rodar:

```
docker-compose up -d
```

Ou configurar manualmente no `backend/src/config/database.ts`:

```
export default {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'sua_senha',
  database: 'chatdb',
  logging: false,
};
```

### **2️⃣ Rodando o Backend**

```
cd backend
npm install
npm run dev
```

### **3️⃣ Rodando o Frontend**

```
cd frontend
npm install
npm run dev
```

Acesse a aplicação em **http://localhost:3000**.

## 🧪 Testes

Para rodar os testes:

```
npm run test
```

## 📜 Documentação da API

A API está documentada via **Swagger**. Após rodar o backend, acesse:

```
http://localhost:5000/api/docs
```

## 🏆 Critérios de Avaliação

✅ Código limpo e organizado seguindo SOLID
✅ Arquitetura bem estruturada
✅ Segurança e boas práticas
✅ Performance e escalabilidade
✅ Interface intuitiva e responsiva
✅ Cobertura de testes mínima de 80%
✅ Documentação clara e completa

---

Feito com ❤️ para a Labzz 🚀

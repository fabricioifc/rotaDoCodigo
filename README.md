# Rota do Codigo

Aplicacao React + Vite com suporte a execucao em Docker no modo desenvolvimento e producao.

## Requisitos

- Docker
- Docker Compose (plugin `docker compose`)

## Variaveis de ambiente

Este projeto usa variaveis com prefixo `VITE_` para injetar configuracoes no build do frontend.

1. Copie os arquivos de exemplo:

```bash
cp .env.dev.example .env.dev
cp .env.prod.example .env.prod
```

2. Ajuste os valores conforme seu ambiente.

## Ambiente de desenvolvimento

Sobe o Vite com hot reload e volume montado do codigo local.

```bash
docker compose --env-file .env.dev up --build
```

A aplicacao fica disponivel em `http://localhost:${VITE_PORT}`.

Para parar:

```bash
docker compose down
```

## Ambiente de producao

Builda os arquivos estaticos e serve com Nginx.

```bash
docker compose -f docker-compose.prod.yml --env-file .env.prod up --build -d
```

A aplicacao fica disponivel em `http://localhost:${APP_PORT}`.

Para parar:

```bash
docker compose -f docker-compose.prod.yml down
```

## Estrutura Docker adicionada

- `Dockerfile`: multi-stage para dev e producao.
- `docker-compose.yml`: stack de desenvolvimento.
- `docker-compose.prod.yml`: stack de producao.
- `.dockerignore`: reduz o contexto de build.
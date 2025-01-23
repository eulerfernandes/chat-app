# Usa uma imagem oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o container
COPY . .

# Compila o TypeScript para JavaScript
RUN npm run build

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar a API
CMD ["node", "dist/server.js"]

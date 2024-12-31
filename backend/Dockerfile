# Imagen base para Node.js
FROM node:16

# Crear y usar el directorio para la app
WORKDIR /app

# Copiar los archivos del backend
COPY package*.json ./backend/
WORKDIR /app/backend
RUN npm install

# Copiar todo
COPY . /app/backend

# Exponer el puerto
EXPOSE 3001

# Comando por defecto
CMD ["node", "server.js"]

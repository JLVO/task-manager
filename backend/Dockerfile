#1. Usamos una imagen base con node instalado
FROM node:24

# Creamos carpeta dentro del contenedor
WORKDIR /app

# copiamos todas las dependencias (package.json)
COPY package*.json ./

#Instalamos las dependencias
RUN npm install

#Copiamos todo el proyecto
COPY . .

# Exponemos el puerto (Tu backend usa 3000)
EXPOSE 3000

# ejcutamos el servidor
CMD ["npm","run","dev"]


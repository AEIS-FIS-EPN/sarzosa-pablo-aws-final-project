# Etapa 1: Construcción de la aplicación
FROM node:16 AS builder

# Configurar el directorio de trabajo
WORKDIR /app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación usando un servidor web ligero
FROM nginx:stable-alpine

# Copiar los archivos de construcción desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar el archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto en el que Nginx estará sirviendo la aplicación
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]


# -------- Stage 1: Build Vite App --------
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

ARG VITE_BACKEND_API_URL
ENV VITE_BACKEND_API_URL=$VITE_BACKEND_API_URL

RUN npm run build

# -------- Stage 2: Serve with NGINX --------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
    
COPY --from=build /app/dist ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
    
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
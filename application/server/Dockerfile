# -------- Stage 1: Build Dependencies --------
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

# -------- Stage 2: Run Lightweight Production Image --------
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 4008

CMD ["npm", "start"]

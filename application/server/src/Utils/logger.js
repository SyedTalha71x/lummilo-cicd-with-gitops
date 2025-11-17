import winston from "winston";
import LokiTransport from "winston-loki";

export const logger = winston.createLogger({
  transports: [
    new LokiTransport({
      host: 'http://192.168.100.195:3100',
      labels: { app: 'my-node-app' },
      json: true,
      format: winston.format.json(),
    })
  ]
});



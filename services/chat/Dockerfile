FROM node:18-slim
WORKDIR /app
COPY server.js .
RUN npm init -y && npm install express
EXPOSE 5003
CMD ["node", "server.js"]

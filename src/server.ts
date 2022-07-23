import express from 'express';

const server = express();

server.get('/', (_, res) => {
  res.json({
    hello: 'world',
  });
});

export default server;

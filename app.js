import fetch from 'node-fetch';
import { exec } from 'child_process';
import express from 'express';
import path from 'path';
const app = express();

// expres rotas
app.use(express.static(path.join(path.resolve(), "public")));

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

// Outros.
const PORT = process.env.PORT || 8085;
try {
  app.listen(PORT, () => {
    setInterval(async () => {
      exec('clear', (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        // for.
        let saida = stdout;
        console.log(saida);
      });
      const response = await fetch('https://hq-marcao-henrique.glitch.me/');
      const body = await response.status;
      console.log(
        `
        ${path.resolve()} \n Servidor rodando !!!
        para entrar, \n http://localhost:8085/ !!!
        `
        , 'Status --->  ', body);
    }, 100000);

    // "https://hq-marcao-henrique.glitch.me/"
    //   100000
  });
} catch (error) {
  console.log("Servidor não rodou !!! , pois : ", error);
}

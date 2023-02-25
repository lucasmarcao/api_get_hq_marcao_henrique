import fetch from 'node-fetch';
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
      console.clear();
      console.log(
        `
        ${path.resolve()} \n Servidor rodando !!!
        para entrar, \n http://localhost:8085/ !!!
        `
      );
      const response = await fetch('https://hq-marcao-henrique.glitch.me/');
      const body = await response.headers;
      console.log('Status --->  ', body);
    }, 4000);

    // "https://hq-marcao-henrique.glitch.me/"
    //   180000
  });
} catch (error) {
  console.log("Servidor não rodou !!! , pois : ", error);
}

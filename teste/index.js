const http = require('node:http');
const port= 3000;
const fs= require('node:fs');
function LerArquivoJson(nomeArquivo){
    const conteudo = fs.readFileSync(nomeArquivo, 'utf-8');
    return JSON.parse(conteudo);

}
const callback = (req, res) => {
    const url = new URL(`http://localhost:${port}${req.url}`);
    const rota = url.pathname;
//sempre definir antes de enviar response
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
   try{

    if(rota === `/carros/classicos`){
        res.statusCode = 200;
        const dados= LerArquivoJson("classicos.json");
        res.end(JSON.stringify(dados));
  
    }
  else if (rota === '/carros/esportivos') {
    res.statusCode = 200;
        const dados= LerArquivoJson("esportivos.json");
        res.end(JSON.stringify(dados));
  }
  else if (rota === '/carros/luxo') {
    res.statusCode = 200;
        const dados= LerArquivoJson("luxo.json");
        res.end(JSON.stringify(dados));
  }
   else if (rota === '/carros/suv') {
    res.statusCode = 200;
        const dados= LerArquivoJson("suv.json");
        res.end(JSON.stringify(dados));
  }

    else{
        res.statusCode = 404;
        res.end("404 - pagina não encontrada");
    }
}
catch (erro) {
    res.statusCode = 500;
    res.end(JSON.stringify({ erro: 'Erro ao ler arquivo JSON' }));
}
};
const server = http.createServer(callback);

server.listen(port, () => {
  console.log('servidor iniciado na rota http://localhost:'+port);
});
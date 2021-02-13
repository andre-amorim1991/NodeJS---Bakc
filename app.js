//importando o express
const express = require('express');
const app = express();
//requerindo o body-parser para melhor leiura dos dados recebidos
const bodyParser = require('body-parser')
const buscaCep = require('./src/functions/buscarCep');
const buscaGit = require('./src/functions/buscaUserGit');

app.use(bodyParser.json());//permite que eu use o body-parse
app.use(bodyParser.urlencoded({extended:true}));

//delcarando que vou usar ejs
app.set('view engine', 'ejs');
//endereço da pagina de views
app.set('views', './src/views');


//renderizando a pagina principal
app.get('/', (req, res) => {
//chamando o arquivo de view "index"    
  res.render('index');
})

//pegando os dados enviados pela pagina "index" pelo method post
app.post('/envia-cep', async(req, res) => {
  const {cep} = req.body
  const resultado = await buscaCep(cep);
 
  res.render('resultado', {dado: resultado});
});

//peegando os dados 
app.post('/envia-git', async(req, res) => {
  const {git} = req.body
  const resultado = await buscaGit(git);

  res.render('resultadoGit', {dado: resultado});
});

app.listen(3003)
console.log("servidor rodando na porta 3003");
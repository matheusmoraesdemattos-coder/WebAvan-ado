const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];



console.log("Total de compras por usuário:");

usuarios.forEach(usuario => {
  let total = 0;

  for (let i = 0; i < usuario.compras.length; i++) {
    total += usuario.compras[i];
  }

  console.log(`${usuario.nome}: total = ${total}`);
});



console.log("\nUsuários ativos:");

const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);

for (let i = 0; i < usuariosAtivos.length; i++) {
  console.log(usuariosAtivos[i].nome);
}



console.log("\nUsuários maiores de idade:");

const maioresIdade = usuarios.filter(usuario => usuario.idade >= 18);

for (let i = 0; i < maioresIdade.length; i++) {
  console.log(maioresIdade[i].nome);
}



let maiorTotal = 0;
let usuarioMaior = "";

for (let i = 0; i < usuarios.length; i++) {

  let total = 0;

  for (let j = 0; j < usuarios[i].compras.length; j++) {
    total += usuarios[i].compras[j];
  }

  if (total > maiorTotal) {
    maiorTotal = total;
    usuarioMaior = usuarios[i].nome;
  }
}

console.log("\nUsuário com maior volume:");
console.log("Usuário:", usuarioMaior);
console.log("Total:", maiorTotal);



console.log("\nCoerção de tipos:");

console.log("5" + 2);     
console.log("5" - 2);     
console.log(true + 1);    
console.log(false == 0);  
console.log(false === 0); 

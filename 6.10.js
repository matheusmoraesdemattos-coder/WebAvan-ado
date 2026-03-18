const pedidos = [
  { id: 1, cliente: "Ana", total: 120, status: "aprovado" },
  { id: 2, cliente: "Bruno", total: 80, status: "pendente" },
  { id: 3, cliente: "Ana", total: 200, status: "aprovado" },
  { id: 4, cliente: "Carlos", total: 50, status: "cancelado" },
  { id: 5, cliente: "Bruno", total: 150, status: "aprovado" }
];


//1-Crie um novo array contendo apenas pedidos com status "aprovado"
const pedidoaprovados=pedidos.filter(pedido => pedido.status === "aprovado")
console.log("APROVADOS=\n", pedidoaprovados)


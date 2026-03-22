const pedidos = [
  { id: 1, cliente: "Ana", total: 120, status: "aprovado" },
  { id: 2, cliente: "Bruno", total: 80, status: "pendente" },
  { id: 3, cliente: "Ana", total: 200, status: "aprovado" },
  { id: 4, cliente: "Carlos", total: 50, status: "cancelado" },
  { id: 5, cliente: "Bruno", total: 150, status: "aprovado" }
];

const pedidosaprovados= pedidos.filter(pedido => pedido.status === "aprovado") .map(pedido=> pedido.cliente)

const valordevendas= pedidos.filter(pedido=> pedido.status === "aprovado") .reduce ((a, b) => a+b.total, 0) 


const media= valordevendas / pedidosaprovados.length



console.log(pedidosaprovados)
console.log(valordevendas)
console.log(media)


class pedido  {
    constructor (id, cliente, total, status){
        this.id=id
        this.cliente=cliente
        this.total=total
        this.status=status
    }
isAprovado() {
   return this.status === "aprovado"
}
}
const pedido2=[ new pedido (1,"matheus",100,"aprovado"),
]



console.log(pedido2,"\n", pedido2[0].isAprovado())

















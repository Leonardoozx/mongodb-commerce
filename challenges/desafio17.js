db.resumoProdutos.insertOne({ franquia: "McDonalds", totalProdutos: 5 });
db.resumoProdutos.find({}, { franquia: 1, _id: 0, totalProdutos: 1 });
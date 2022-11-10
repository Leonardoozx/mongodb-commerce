db.produtos.updateMany({}, { $set: { avaliacao: NumberInt(0) } });
db.produtos.updateMany({ tags: { $in: ["bovino"] } }, { $inc: { avaliacao: 5 } });
db.produtos.updateMany({ tags: { $in: ["ave"] } }, { $inc: { avaliacao: 3 } });
db.produtos.find({}, { nome: 1, _id: 0, avaliacao: 1 });

use('BD3-NoSQL-AtlasMongoDB')


// 6A - Mais Caro
// db['bd3_atv3_produtos'].find().sort({ valor_produto: -1 }).limit(1)

//6B - Mais Barato
// db['bd3_atv3_produtos'].find().sort({ valor_produto: 1 }).limit(1)

//6C - Intervalo de valores
// db.bd3_atv3_produtos.find({ 
//     valor_produto: { $gte: 50, $lte: 400 } 
// })


//6D - Intervalo categoria
// db.bd3_atv3_produtos.find({ categoria_produto: "Eletrônicos" })


// 6E - Intervalo duas categorias 
// db.bd3_atv3_produtos.find({ categoria_produto: { $in: ["Eletrônicos", "Roupas"] } })

// 6F - exclusão duas categorias 
// db.bd3_atv3_produtos.find({ categoria_produto: { $nin: ["Eletrônicos", "Roupas"] } })

// //6G - Mais barato para o mais caro
// db.bd3_atv3_produtos.find().sort({ valor_produto: 1 })

// 6H - Mais caro para o mais barato
// db.bd3_atv3_produtos.find().sort({ valor_produto: -1 })

//6I - Mais barato para o mais caro em uma categoria
// db.bd3_atv3_produtos.find({ categoria_produto: "Livros" }).sort({ valor_produto: 1 })

// 6J - Mais barato para o mais caro excluindo uma categoria

db.bd3_atv3_produtos.find({ categoria_produtos: { $ne: "Móveis" } }).sort({ valor_produto: -1 })

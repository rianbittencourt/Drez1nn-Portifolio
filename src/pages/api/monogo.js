const { MongoClient } = require('mongodb')

// URL de conexão do MongoDB Atlas
const uri =
  'mongodb+srv://dbAdmin:d1mxMP3Qvn2NQtN5@drez1nn.ksdsqy6.mongodb.net/?retryWrites=true&w=majority'

// Conecte-se à base de dados
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function main() {
  try {
    await client.connect()
    console.log('Conexão com o MongoDB estabelecida com sucesso!')

    const database = client.db('Links') // Nome da sua base de dados
    const collection = database.collection('Spotify') // Nome da sua coleção

    // Consulta para listar todos os documentos
    const documents = await collection.find({}).toArray()

    console.log('Documentos da coleção:')
    console.log(documents)
  } finally {
    await client.close()
  }
}

main().catch(console.error)

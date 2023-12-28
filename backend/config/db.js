
const mongoose = require("mongoose")



const connect = () => {
    mongoose.connect(`mongodb+srv://dbuser:senha#@$@cluster0.jqyx0.mongodb.net/?retryWrites=true&w=majority`)

    const connection = mongoose.connection;

    connection.on("error", () => {
        console.error("Erro ao conectar com o mongoDB")
    })

    connection.on("open", () => {
        console.log("Conetado ao mongoDB com sucesso!")
    })
}

connect();

module.exports = mongoose;






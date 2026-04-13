const express = require('express');
const app = express();
const data = require("./data.json");

app.use(express.json()); 

app.get("/client"  , function(req, res) {
    res.json(data);
} );

app.get("/client/:id" , function(req, res) {
    const {id} = req.params; 
    const client = data.find(client => client.id === (id));

    if (!client) {
        return res.status(204).json({ error: "Client não encontrado" });
    }

    res.json(client);
});

app.post("/client" , function(req, res) {
    const { name, email } = req.body; 

    res.json({ message: "Client criado com sucesso!", client: { name, email } });
} );


app.put("/client/:id" , function(req, res) {
    const { id } = req.params; 
    const client = data.find(client => client.id === (id));

    if (!client) {
        return res.status(204).json({ error: "Client não encontrado" });
    }

    const { name, email } = req.body;

    client .name = name = client.name;
    client .email = email = client.email;


    res.json({ message: "Client atualizado com sucesso!", client: client });

} );

app.delete("/client/:id" , function(req, res) {
    const { id } = req.params;
    const clientFiltred = data.filter(client => client.id !== (id));

    res.json({ message: "Client deletado com sucesso!", client: clientFiltred });
} );

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
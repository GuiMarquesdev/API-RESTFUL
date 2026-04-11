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

    res.json({ message: "Cliente criado com sucesso!", client: { name, email } });
} );


app.put("/client/:id" , function(req, res) {
    const { id } = req.params; 
    const clinet = data.find(client => client.id === (id));

    if (!client) {
        return res.status(204).json({ error: "Client não encontrado" });
    }

    const { name, email } = req.body;

    clinet .name = name = clinet.name;
    clinet .email = email = clinet.email;


    res.json({ message: "Cliente atualizado com sucesso!", client: clinet });

} );

app.delete("/client/:id" , function(req, res) {
    const { id } = req.params;
    const clientFiltred = data.filter(client => client.id !== (id));

    req.json({ message: "Cliente deletado com sucesso!", clients: clientFiltred });
} );

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
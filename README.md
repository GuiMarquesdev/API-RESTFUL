API RESTful de Gestão de Clientes
Esta é uma API RESTful moderna desenvolvida com Node.js e Express, focada na gestão de um sistema de clientes. O projeto demonstra a implementação de operações CRUD (Create, Read, Update, Delete) seguindo as melhores práticas de arquitetura de software para o ecossistema JavaScript.

🚀 Tecnologias Utilizadas
Runtime: Node.js

Framework: Express v5.2.1

Formato de Dados: JSON

Módulos: CommonJS

🛠️ Funcionalidades
A API permite realizar as seguintes operações através de endpoints específicos:

Listar todos os clientes: Retorna a base de dados completa.

Consultar cliente por ID: Procura e retorna um registo específico.

Adicionar novo cliente: Processa e valida a criação de novos utilizadores via corpo da requisição.

Atualizar dados de cliente: Permite a edição de informações de clientes existentes.

Remover cliente: Elimina um registo da base de dados com base no identificador fornecido.

📂 Estrutura do Projeto
server..js: Arquivo principal contendo a lógica do servidor e definição das rotas.

data.json: Ficheiro utilizado como base de dados local para persistência de informações.

package.json: Configurações de dependências e scripts do projeto.

.gitignore: Configuração para impedir o envio de pastas pesadas como node_modules para o repositório.

🏁 Como Executar o Projeto
Pré-requisitos
Node.js instalado na sua máquina.

Gestor de pacotes (npm ou yarn).

Instalação
Clone o repositório.

Instale as dependências: npm install

Inicie o servidor: node server..js
O servidor estará disponível em http://localhost:3000.



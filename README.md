# Formulário de Avaliação

Este é um formulário de avaliação que permite que usuários enviem suas respostas a uma série de perguntas sobre um evento, com validação de entrada e inserção dos dados em um banco de dados MySQL.

## Tecnologias Utilizadas

- **HTML/CSS**: Estrutura e estilo do formulário.
- **JavaScript**: Validação dos campos de entrada.
- **PHP**: Processamento do formulário e inserção de dados no banco de dados.
- **MySQL**: Banco de dados para armazenar as respostas.

## Estrutura do Projeto

- **index.html**: Contém o formulário de avaliação com os campos de entrada e o script de validação.
- **script.js**: Validação de entrada usando JavaScript para garantir que o nome tenha apenas letras e a idade, apenas números.
- **banco.php**: Código PHP para processar e salvar as respostas no banco de dados MySQL usando *prepared statements*.

## Como Funciona o Formulário

1. **Validação dos Campos**: 
    - **Nome**: Aceita apenas letras.
    - **Idade**: Aceita apenas números.
2. **Envio de Dados**: 
   - Ao enviar, o formulário é enviado via AJAX para o arquivo `banco.php`, que processa e insere os dados no banco.
3. **Confirmação**:
   - Após o envio bem-sucedido, uma mensagem de confirmação é exibida.

## Demonstração Visual

![Form-Imagem](https://github.com/user-attachments/assets/c3359058-5dc4-409f-b256-5511c23437a2)

## Configuração do Banco de Dados

Para rodar o código em um ambiente de desenvolvimento local, você precisará configurar seu próprio banco de dados. Os dados de acesso ao banco de dados estão em `banco.php`. **Por razões de segurança, as credenciais reais do banco de dados não estão incluídas.**

Para configurar:
1. Crie um banco de dados MySQL.
2. Defina as credenciais no arquivo `banco.php`:
    ```php
    $servername = "localhost";
    $username = "seu_usuario";
    $password = "sua_senha";
    $dbname = "nome_do_banco";
    ```
3. Crie a tabela conforme o esquema abaixo:
    ```sql
    CREATE TABLE formulario (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        idade INT NOT NULL,
        q1 TINYINT NOT NULL,
        q2 TINYINT NOT NULL,
        q3 TINYINT NOT NULL,
        q4 TINYINT NOT NULL,
        q5 TEXT NOT NULL
    );
    ```

> **Nota**: Este projeto é apenas uma demonstração. Ele não possui credenciais de banco de dados para segurança. Configure seu próprio ambiente para testes.

## Considerações Finais

Este projeto demonstra um formulário com validação e processamento backend. Para um funcionamento completo, o banco de dados deve ser configurado em um ambiente seguro. Entre em contato para dúvidas sobre a configuração ou outras adaptações!

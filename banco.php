<?php
header('Content-Type: application/json');

$servername = "site";
$username = "username";
$password = "password";
$dbname = "banco";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Conexão falhou: " . $conn->connect_error]);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['name'];
    $idade = $_POST['age'];
    $q1 = $_POST['q1'];
    $q2 = $_POST['q2'];
    $q3 = $_POST['q3'];
    $q4 = $_POST['q4'];
    $q5 = $_POST['q5'];

    $sql = "INSERT INTO formulario (nome, idade, q1, q2, q3, q4, q5) VALUES ('$nome', '$idade', '$q1', '$q2', '$q3', '$q4', '$q5')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "message" => "Suas respostas foram salvas!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Erro: " . $conn->error]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Método não permitido"]);
}

$conn->close();
?>
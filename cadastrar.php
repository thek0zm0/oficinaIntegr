<?php

$nome = $_POST['nome'];
$nascimento = $_POST['nascimento'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$rua = $_POST['rua'];
$bairro = $_POST['bairro'];
$cidade = $_POST['cidade'];
$estado = $_POST['estado'];
$cep = $_POST['cep'];

$strcon = mysqli_connect('localhost','root','','healthfoods') or die('Erro ao conectar ao banco de dados');

$sql = "INSERT INTO usuarios VALUES";
$sql .= "('$nome', '$nascimento', '$email', '$senha', '$rua', '$bairro', '$cidade', '$estado', '$cep')"; 
mysqli_query($strcon,$sql) or die("Erro ao tentar cadastrar registro");
mysqli_close($strcon);
echo "Cliente cadastrado com sucesso!";
?>
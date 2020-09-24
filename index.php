<?php
// Conexão
require_once 'db_connect.php';

// Sessão
session_start();

// Botão enviar
if(isset($_POST['btn-entrar'])):
	$erros = array();
	$login = mysqli_escape_string($connect, $_POST['login']);
	$senha = mysqli_escape_string($connect, $_POST['senha']);


	if(empty($login) or empty($senha)):
		$erros[] = "<li> O campo login/senha precisa ser preenchido </li>";
	else:
		// 105 OR 1=1 
	    // 1; DROP TABLE teste

		$sql = "SELECT login FROM usuarios WHERE login = '$login'";
		$resultado = mysqli_query($connect, $sql);		

		if(mysqli_num_rows($resultado) > 0):
		$senha = md5($senha);       
		$sql = "SELECT * FROM usuarios WHERE login = '$login' AND senha = '$senha'";



		$resultado = mysqli_query($connect, $sql);

			if(mysqli_num_rows($resultado) == 1):
				$dados = mysqli_fetch_array($resultado);
				mysqli_close($connect);
				$_SESSION['logado'] = true;
				$_SESSION['id_usuario'] = $dados['id'];
				header('Location: hfoods.php');
			else:
				$erros[] = "<li> Usuário e senha não conferem </li>";
			endif;

		else:
			$erros[] = "<li> Usuário inexistente </li>";
		endif;

	endif;

endif;
?>
<!DOCTYPE html>
<html>
<head>
	<title>Healthy Foods</title>
	<link rel="stylesheet" type="text/css" href="css/indexstyle.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
</head>
<body>
	<!-- login básico -->


	<form action="<?php echo $_SERVER['PHP_SELF']; ?>" class="login" method="POST">
		<h1>Login</h1>
		<?php 
		if(!empty($erros)):
			foreach($erros as $erro):
				echo $erro;
			endforeach;
		endif;
		?>

		<div class="txtb">
			<input type="text" name="login" value="<?php echo isset($_COOKIE['login']) ? $_COOKIE['login'] : '' ?>">
			<span data-placeholder="Usuário"></span>
		</div>

		<div class="txtb">
			<input type="password" name="senha" value="<?php echo isset($_COOKIE['senha']) ? $_COOKIE['senha'] : '' ?>">
			<span data-placeholder="Senha"></span>
		</div>

		<input type="submit" name="btn-entrar" class="logbtn" value="Login">

		<div class="bottom-text">
			Não possui conta?
			<a href="registro.html">Inscrever-se</a>
		</div>

		<div class="bottom-text">
			É um produtor?
			<a href="motiva.html">Entre em contato</a>
		</div>
		
	</form>

	<script type="text/javascript">
      $(".txtb input").on("focus",function(){
        $(this).addClass("focus");
      });

      $(".txtb input").on("blur",function(){
        if($(this).val() == "")
        $(this).removeClass("focus");
      });

     </script>

</body>
</html>
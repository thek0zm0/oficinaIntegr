<?php
// Conexão
require_once 'db_connect.php';

// Sessão
session_start();

// Verificação
if(!isset($_SESSION['logado'])):
	header('Location: index.php');
endif;


?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Healthy Foods</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="css/hfoodsstyle.css">
</head>
<body>
    <!--Header da página (Healthy foods, inicio, etc..)-->
    <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">
            <h1 class="logo mr-auto"><a href="index.html">Healthy Foods</a></h1>

            <nav class="nav-menu d-none d-lg-block">
                <ul>
                    <li class="active"><a href="hfoods.html">Início</a></li>
                    <li><a href="hfoodsnp.html">Nossos Produtores</a></li>
                    <li><a href="hfoodsae.html">A equipe</a></li>
                    <li><a href="hfoodscpr.html">Compre</a></li>
                    <li><a href="hfoodscpr.html">Compre</a></li>
                    <li> <a href="logout.php">Sair</a></li>

                </ul>
            </nav>
        </div>
    </header>

    <!--Main (institucional)-->
    <main id="main">
        <section id="about" class="about">
            <div class="container">
                <div class="section-title">
                    <h2>A plataforma</h2>
                    <p>A Healthy Foods é a melhor forma de ligar você aos melhores produtores rurais, lhe dando acesso a produtos frescos e de qualidade excepcional.</p>
                </div>
                <div class="row content">
                    <div class="col-lg-6">
                        <img src="https://preview.redd.it/nu1njqqlhf241.jpg?auto=webp&s=7c31268462f4760ac35a8deb18747df0d584ac4f" class="img-inst" alt="">
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0">
                        <p>Levamos à você, o conforto de poder selecionar à distância, as melhores frutas e verduras para receber em sua casa. O grupo seleto de produtores presentes na plataforma garantem a qualidade de seus produtos através de:</p>
                        <ul>
                            <li><p>Postagens recentes</p></li>
                            <li><p>Fotos reais dos produtos</p></li>
                            <li><p>Controle de qualidade feito pelo administradores</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>


    <!--Ponto final-->
    <footer id="footer">
        <div class="container">
          <h3>Healthy Foods</h3>
          <p>Qualidade tratada com seriedade.</p>
        </div>
      </footer>
    
</body>
</html>
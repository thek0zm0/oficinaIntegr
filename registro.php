
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registre-se</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./css/registrostyle.css">

</head>
<body>
    <!--
        Página de restrido de usuário
    -->

    <!---->
    <div class="container-fluid">
        <form action= "cadastrar.php"  method="POST">
          <!--
              Formulários advindos do bootstrap;
              Col-md-6 significa o tamanho da tela que este elemento irá ocupar;
              Tamanho máximo para md é 12, logo 6 é metade ... ;
              Assim, fica fácil manipular o quanto da página cada barra ocupa;
              Usando esta funcionalidade, conseguimos garantir que o site seja responsivo;
              Programadores profissionais possivelmente não utilizariam bootstrap;
          -->
          <!-- Nome e Nascimento -->
          <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputNome">Nome</label>
                    <input type="text" name="nome" class="form-control" id="inputNome" placeholder="Nome">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputData">Nascimento</label>
                    <input type="date" name="nascimento" class="form-control" value="2000-01-01" id="inputData" placeholder="Data">
                </div>
             </div>
         <!-- Email e Senha -->
         <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail">Email</label>
              <input type="email" name="email" class="form-control" id="inputEmail" placeholder="Email">
            </div>
            <div class="form-group col-md-6">
              <label for="inputSenha">Senha</label>
              <input type="password" name="senha" class="form-control" id="inputSenha" placeholder="Senha">
            </div>
         </div>
         <!-- Rua, bairro, Cidade, Cep -->
          <div class="form-group">
            <label for="inputRua">Rua</label>
            <input type="text" name="rua" class="form-control" id="inputRua" placeholder="">
           </div>
           <div class="form-group">
            <label for="inputBairro">Bairro</label>
            <input type="text" name="bairro" class="form-control" id="inputBairro" placeholder="">
           </div>
         <div class="form-row">
            <div class="form-group col-md-6">
             <label for="inputCidade">Cidade</label>
             <input type="text" name="cidade" class="form-control" id="inputCidade">
            </div>
             <div class="form-group col-md-4">
             <label for="inputEstado">Estado</label>
             <select id="inputEstado" name="estado" class="form-control">
                <option selected>Selecione...</option>
                 <option>Paraná</option>
             </select>
             </div>
             <div class="form-group col-md-2">
             <label for="inputCEP">CEP</label>
             <input type="text" name="cep" class="form-control" id="inputCEP">
             </div>
         </div>
         <!-- O botão submit ainda não funciona pois não temos backend neste momento -->
         <button type="submit" class="btn btn-primary">Registre-se</button>
        </form>
    </div>
</body>
</html>
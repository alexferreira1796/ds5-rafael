<?php
	
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST, PUT');

	if(!empty($_POST["telefone"])) {

		// Array com os dados
		$dados = array(
			'NameClient' => ucwords(strtolower(utf8_decode($_POST["nome"]))),
			'Phone' => $_POST["telefone"],
			'Address' => utf8_decode($_POST["endereco"]),
			"Payment" => utf8_decode($_POST["pagamento"]),
			"Created_At" => date("Y-m-d"),
			"Product" => $_POST["produto"],
			"Numero_Produto" => $_POST["numeroProduto"],
			"Pixel" => $_POST["pixel"],
			"Source" => $_POST["src"],
			"Site" => $_POST["site"],
			"Msg" => utf8_decode($_POST["msg"])
		);

		/*****************************************************/
		// WHATSAPP API
		$cURL = curl_init('https://800k.com.br/api_whatsapp/api_whatsapp.php'); 
		curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true); // Aqui pra onde os dados serão enviados

		curl_setopt($cURL, CURLOPT_POST, true); // Defino o metodo de envio POST
		
		curl_setopt($cURL, CURLOPT_POSTFIELDS, $dados);// Definimos quais informações serão enviadas pelo POST (array)
		$resultado = curl_exec($cURL);

		//print_r($resultado);

		curl_close($cURL);

		/*****************************************************/

		// GOOGLE API
		$cURL = curl_init('https://800k.com.br/api_whatsapp/google_api.php');
		curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($cURL, CURLOPT_POST, true);
		curl_setopt($cURL, CURLOPT_POSTFIELDS, $dados);
		$resultado = curl_exec($cURL);
		curl_close($cURL);

	}
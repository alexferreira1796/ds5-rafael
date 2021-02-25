window.onload = init;
function init() {
	var hostname = window.location.href;
	var cache = new Date().getTime();
	var config = setConfig(hostname);
	var html = `
	<style>.widget { display: none; }</style>
	<link rel="stylesheet" href="api/css/style.css?cache=`+ cache +`">
<div class="widget">
<div id="modal-whatsapp" class="modal-wapp" style="right: 0px; left: 0px;">
	<div id="loadWapp">
		<div class="form-wapp">
			<div class="box-form">
				<div class="header">
					<div class="logo">
						<img src="api/img/Whatsapp.png" alt="Whatsapp" title="Whatsapp">
					</div>
					<span id="wapp-header">
						<a href="#" class="closebtn">
							<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="35" height="17" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="#ffffff"></path>
					</svg>
						</a>
					</span>
				</div>
				<form action="#" method="post" class="validate-form" id="formWapp">
					<div class="suppor-visu">
						<p>Você solicitou Suporte<br><br><small class="number-su"></small></p>
					</div>
					<div class="form-visu">
						<input type="hidden" id="site" name="site" value="`+ hostname +`">
						<input type="hidden" id="src" name="src" value="`+ hostname +`">
						<input type="text" value="55`+ config[1] +`" class="hidden" id="number-whatsapp">
						<input type="text" value="`+ config[0] +`" class="hidden" id="produto">
						<input type="text" value="`+ config[2] +`" class="hidden" id="nameproduct">
						<div class="box-campos validate-input">
							<input id="nome" class="campo valida name" type="text" name="nome" placeholder="Nome Completo" tabindex="1" value="">
							<span class="icon">
								<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="20" height="20" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c4.418 0 8 1.79 8 4v2H4v-2c0-2.21 3.582-4 8-4z" fill="#57b846"></path></svg>
							</span>
						</div>
						<div class="box-campos validate-input">
							<textarea id="msg" class="campo valida msg" type="text" msg="msg" tabindex="2" value="" placeholder="Digite sua mensagem" style="resize: none"></textarea>
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="18" height="18" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M13 8.998h-2v-2h2m0 10h-2v-6h2m-1-9c-5.524 0-10 4.477-10 10s4.476 10 10 10c5.522 0 10-4.477 10-10s-4.478-10-10-10z" fill="#57b846"></path>
							</span>
						</div>
						<div class="container-form-btn">
							<a tabindex="5" href="#" id="load" target="_blank" class="wappSend box-form-btn col-xs-12 col-md-6 btn btn-green  submit sendWhasApp" title="Solicitar Atendimento">SOLICITAR ATENDIMENTO
							</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
</div>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="api/js/jquery.mask.min.js?cache=` + cache + `"></script>
<script src="api/js/script.js?cache=` + cache + `"></script>
`;
	scripts('https://code.jquery.com/jquery-3.3.1.min.js');
    var checkReady = function() {
        if (!window.jQuery) {
        	setTimeout(function() {
            	$('body').append(html);
            	tel();
        	}, 1000);
        } else {
        	setTimeout(function() {
            	$('body').append(html);
            	tel();
        	}, 1000);
        }
    };
    checkReady();
    function scripts(param) {
		var script = document.createElement("script");
    	script.src = param;
    	script.type = 'text/javascript';
    	document.getElementsByTagName("head")[0].appendChild(script);
	}
	function tel() {
        $("#telefone").on('keyup', function() {
        	mascara( this, mtel );
        });
	}
}
function setConfig(host) {
	host = replace(host);
	var json = [ { "id": 1, "product": "D5S Pocket", "name": "D5S Pocket", "phone": [ "5196216581" ] } ];
	var product = JSON.parse(JSON.stringify(json));
	pos = product.map(function(e) { return e.id; });
	var id = 15;
	var number = ["5196216581"];
	var phone = number[ parseInt( Math.random() * number.length )];
	var product = "D5S Pocket"
	for(var i = 0; i < json.length; i++ ) {
		if( host.indexOf(json[i]["product"]) > -1 ) {
			var id = json[i]["id"];
			var phone = json[i]["phone"][ random(0, json[i]["phone"].length) ];
			var product = json[i]["name"];
		}
	}
	return [id, phone, product];
	function random(max, min) {
	    var valor = Math.random() * (max - min) + min
	    return Math.floor(valor)
	}
	function replace(str) {
		return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		.replace(/\-+/g, '')
		.replace(/\.+/g, '')
		.replace(/\:+/g, '')
		.replace(/[//"]/g, '')
		.replace(/(^-+|-+$)/, '');
	}
}
function mascara(o,f){
	v_obj=o
	v_fun=f
	setTimeout("execmascara()",1)
}
function execmascara(){
	v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
	v=v.replace(/\D/g,"");         
	v=v.replace(/^(\d{2})(\d)/g,"($1) $2");
	v=v.replace(/(\d)(\d{4})$/,"$1-$2");
	return v;
}
function id( el ){
	return document.getElementById( el );
}
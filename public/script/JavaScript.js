
 			function validaEmail(){
				if(!document.fCadastro.email.value.includes('@')){
					alert("E-mail inválido");
					}
			}

			function validaNome(){
				if(document.fCadastro.nome.value == " "){
					alert("Campo vazio");
				}
			}

			alert("Obrigado por visitar nossa página");

			var time = new Date();
			console.log(time.getHours() + ":" +
			time.getMinutes() + ":" +
			time.getSeconds() );
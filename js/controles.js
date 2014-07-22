

$(document).ready(function(){
	$(".publicar").on("click",mostrarFormulario);

	function mostrarFormulario(){
		//$('#agreeArt').slideDown();  // solo mostrar
		$('#agreeArt').slideToggle();  // muestra y oculta
	}

	$('#agreeArt').on("submit",procesarFormulario);

	function procesarFormulario(evt){
		evt.preventDefault();
		var titulo = $("#titulo").val();
		var autor = $("#autor").val();
		var tag = $("#tag").val();

		var template  = '<article class="post"> \
			<div class="descripcion"> \
				<figure class="imagen"> \
					<img src="images/foto.jpg" /> \
				</figure> \
				<div class="detalles"> \
					<h2 class="titulo"> \
						'+ titulo +' \
					</h2> \
					<p class="autor"> \
						por <a href="#">'+ autor +'</a> \
					</p> \
					<a class="tag">'+ tag +'</a> \
					<p class="fecha">hace <strong>0 min</strong></p> \
				</div> \
			</div> \
			<div class="acciones"> \
				<div class="votos"> \
					<a href="#" class="up"></a> \
					<span class="total">0</span> \
					<a href="#" class="down"></a> \
				</div> \
				<div class="datos"> \
					<a class="comentarios" href="#"> \
						0 \
					</a> \
					<a class="estrellita" href="#"> \
					</a> \
				</div> \
			</div> \
		</article>';

		//$(".posts").prepend(template);				
		//pasando un objeto jquery
		$(".posts").prepend($(template).fadeIn(function(){
			$(this).css('display','inline-block')
		}));				

		//$('input[type=text]').val('');
		$('#agreeArt').each (function(){
  			this.reset();
		});

		$('#agreeArt').slideUp();
	}

	function crearSizer(pixels){
		return function(){
			$('body').css('font-size', pixels + 'px');
		}
	}

	$('.sizer').each(function(i, link){
		var pixels = $(link).prop('hash').substring(1);
		$(link).css('font-size', pixels + 'px').on('click' ,crearSizer(pixels));
	});


	function crearContador(valorInicial){
		var contador = valorInicial || 0;
		return{
			up: function(){
				return ++contador;
			},

			down: function(){
				return --contador;
			}
		};
	}

	$('.total').each(function(i , elem){
		var contTotal = crearContador(elem.innerHTML);
		$(elem)
			.siblings('.up')
				.on('click', function(evt){
					evt.preventDefault();					
					$(elem).html(contTotal.up());
				})
			.siblings('.down')
				.on('click', function(evt){
					evt.preventDefault();					
					$(elem).html(contTotal.down());	
				});	
	});	
});
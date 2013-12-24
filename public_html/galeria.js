//instanciació i inicialització de la variable que emmagatzema els links
			var ruta = "";
			//Precarregar fotos a la caché per tal que la transició sigui instantània
			var image1=new Image();
			image1.src="img/slider/foto1.png";
			image1.link="componentes/procesadores/intel/i5.html";

			var image2=new Image();
			image2.src="img/slider/foto2.png";
			image2.link="componentes/ram/corsair/vengeancePC312800.html";

			var image3=new Image();
			image3.src="img/slider/foto3.png";
			image3.link="componentes/placasBase/asrock/n68vgs3fx.html";

			var image4=new Image();
			image4.src="img/slider/foto4.png";
			image4.link="componentes/tgraficas/sapphire/radeonhd5450.html";

			//Funció per passar les imatges
						var fotoActiva=1 //per definir la fotografia que s'està mostrant  
						
						
						function pasaFoto(){
							if (!document.images)
								
							return
							document.images.galeria.src=eval("image"+fotoActiva+".src")
							
							//Si la foto és la 1, 2 o 3 saltarà a la següent. Si és la última, saltarà a la primera
							if (fotoActiva<4){
								fotoActiva++
							}
							else{
								fotoActiva=1
							}
							
							//Canviar de foto cada 3 segons
							setTimeout("pasaFoto()",5000)
						
						}

						
						function cambiaLink(){
							
								document.getElementById('linkSlider').href= eval("image"+fotoActiva+".link");
								setTimeout("cambiaLink()",5000)
						}
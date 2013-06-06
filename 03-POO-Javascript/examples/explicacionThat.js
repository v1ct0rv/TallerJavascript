var gato = {
 $nombre: 'Orión',
 $raza: 'Chandoso',

 maullar : function() {
 
 console.log('Desde Maulla si tengo acceso a la raza ' + this.$raza);
 var that = this;

  function sinAcceso() {
  	debugger;  
   console.log('Al leer $raza :' + that.$raza);
  }
  sinAcceso();
 }
}


gato.maullar();
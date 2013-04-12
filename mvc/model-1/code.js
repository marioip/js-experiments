var Producto = ProJS.Model.extend({
  // escribe aquí

  init: function(tipo){
  	this.tipo = tipo;
  	console.log(this.tipo);
  	this._super;
  },
  defaults: {
  	nombre: "Producto",
  	categoria: "articulo",
  	precio: "0"
  },
  set: function(attributes, options) {
    console.log("set");
  },
  get: function(){
  	return this.tipo;
  },
  validate: function(attributes){
  	console.log(attributes);
  }

});

var p = new Producto("jersey");
var atrs = {nombre:"Camiseta",categoria:"camisetas",precio:20};

p.set(atrs,{validate: true});
console.log("get"+p.get());

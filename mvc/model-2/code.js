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
  urlRoot: '/products',
  validate: function(attributes){
  	console.log(attributes);
  },
  parse: function(data){
    console.log(data);
  }

});

var p = new Producto("sombrero");
var atrs = {
  id: 4500,
  nombre:"Camiseta",
  categoria:"camisetas",
  precio:20
};
p.set(atrs);
p.fetch({
  success:function(){
    alert(JSON.stringfy(p.attributes));
  }
});

p.on("sync", function(){
  console.log("modelo listo");
})

console.log("get"+p.get());


const db = require('./products.json');

db.data.forEach(product=>{
  product.categories = [{id:"web-design", label:"Web Design"}]
  product.properties.forEach(property=>{
    if(property.label === "File Size"){
      property.text = "~100MB";
    }
  });
});

console.log( JSON.stringify(db, null, '  ') );

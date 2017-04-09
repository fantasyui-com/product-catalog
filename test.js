const db = require(__dirname + '/' + 'index.js')();

console.log( 'ACTIVE:', db.filter(['deleted', false]).result().map(item=>item.name) );

console.log( 'DELETED:', db.filter('deleted').result().map(item=>item.name) );

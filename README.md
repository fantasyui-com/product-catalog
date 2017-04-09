# product-catalog
Efficient lodash backed, package.json formatted digital downloads product-catalog with minimal requirements and maintenance.

## Concept

Are product catalogs secret information... or public? A public product catalog,
especially one stored in a public globally accessible network, can become your
public API. In context of affiliate networks and helping new-comers seed their
own product databases, the product-catalog model is priceless.

Clone or fork, edit, make it your own, and prosper.
Dr. M.

## Structure

```JavaScript

{
  "deleted": false, // you must explicitly state that the record is not deleted

  "title": "Shodan", // full product name in proper case
  "name": "shodan", // npm friendly name, no spaces, all lowercase

  "description": "Beautiful lightweight theme with hundreds of components",
  "version": "1.0.0",

  "amount": 1000, // price in cents
  "currency": "usd", // valid currency code

  // listing properties as bool for ease of filtering
  "popular": true,
  "featured": false,

  "author": "Fantasy User Interface - Motion Picture Quality Bootstrap 4 Fantasy UI Kits",
  "authorId":"fantasyui-com", // id or username of the seller

  "homepage": "http://fantasyui.com/demo/shodan/content/product-intro/"

}

```

### API

- [find](https://lodash.com/docs#find)
- [filter](https://lodash.com/docs#filter)

### Installation

Clone this repository, customize and include in your project.

### Usage Example

```JavaScript

console.log( 'ACTIVE:', db.filter(['deleted', false]).result().map(item=>item.name) );

console.log( 'DELETED:', db.filter('deleted').result().map(item=>item.name) );


```

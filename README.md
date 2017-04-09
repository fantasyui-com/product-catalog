# product-catalog
Efficient lodash backed, package.json formatted digital downloads product-catalog with minimal requirements and maintenance.

## Concept

Are product catalogs secret information... or public? A public product catalog,
especially one stored in a public globally accessible network, can become your
public API. In context of affiliate networks and helping new-comers seed their
own product databases, the product-catalog model is priceless.

Clone or fork, edit, make it your own, and prosper.
Dr. M.

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

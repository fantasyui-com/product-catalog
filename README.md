# product-catalog
Efficient lodash backed, package.json formatted digital downloads product-catalog with minimal requirements and maintenance.

- [find](https://lodash.com/docs#find)
- [filter](https://lodash.com/docs#filter)

### Usage Example

```JavaScript

console.log( 'ACTIVE:', db.filter(['deleted', false]).result().map(item=>item.name) );

console.log( 'DELETED:', db.filter('deleted').result().map(item=>item.name) );


```

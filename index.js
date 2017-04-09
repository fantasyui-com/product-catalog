const _ = require('lodash');

const products = require(__dirname + '/products.json');

class QueryResult {

  constructor(input) {
    this.data = input;
  }

  result() {
    return this.data;
  }

  find() {
    const result = _.find.apply(this, [this.data].concat(Array.prototype.slice.call(arguments)));
    return new QueryResult(result)
  }

  filter() {
    const result = _.filter.apply(this, [this.data].concat(Array.prototype.slice.call(arguments)));
    return new QueryResult(result)
  }

  orderBy() {
    const result = _.orderBy.apply(this, [this.data].concat(Array.prototype.slice.call(arguments)));
    return new QueryResult(result)
  }

  groupBy() {
    const result = _.groupBy.apply(this, [this.data].concat(Array.prototype.slice.call(arguments)));
    return new QueryResult(result)
  }
}

module.exports = function ({} = {}) {

  return new QueryResult(products.data);

}

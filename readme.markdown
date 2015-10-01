# graphqlcypherquery

streaming rest api for neo4j using graphql

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

main.js:

```javascript
var url = 'http://user:password@host:8476'
var query = require('graphqlcypherquery')(url)
var params = { name: 'Peter' }

q(`
  person(name: <name>) {
    id,
    beer(edge: ":likes") {
      name,
      award(edge: ":award") {
        name
      }
    }
  }
`, params).on('data', console.log.bind(console))
```

# install

With [npm](https://npmjs.org) do:

```
npm install graphqlcypherquery
```

# license

MIT

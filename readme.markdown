# graphqlcypherquery

streaming rest api for neo4j using graphql

[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/JamesKyburz/graphqlcypherquery.svg)](https://greenkeeper.io/)

main.js:

```javascript
var url = 'http://user:password@host:8476'
var query = require('graphqlcypherquery')(url)
var params = { name: 'Peter' }

q(`
  person() as p {
    properties {
      name,
      beer(relationship: ":likes") {
        properties {
          name,
          award(relationship: ":award") as awards {
            properties {
              name
            }
          }
        }
      }
    }
  }
`, params).on('data', console.log.bind(console))
```

# install

```
npm install graphqlcypherquery
```

# license

MIT

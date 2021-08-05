const tape = require('tape')
const bfe = require('../')

tape('01 msg type', function (t) {
  const values = [
    '%HZVnEzm0NgoSVfG0Hx4gMFbMMHhFvhJsG2zK/pijYII=.sha256', // classic
    '%HZVnEzm0NgoSVfG0Hx4gMFbMMHhFvhJsG2zK/pijYII=.bbmsg-v1', // bendy-butt
  ]

  const encoded = bfe.encode(values)

  t.deepEquals(encoded[0].slice(0, 2), Buffer.from([1, 0]), 'classic feed')
  t.deepEquals(encoded[1].slice(0, 2), Buffer.from([1, 4]), 'bendy feed')

  t.deepEquals(bfe.decode(encoded), values, 'decode works')
  t.end()
})

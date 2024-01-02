const path = require('path')
const {
    assertEquals,
    assertThrows,
    specify
} = require('./simple-test-framework')

const { lookup } = require('./dictionary')
const filepath = path.resolve(__dirname, 'dictionary.txt')

specify('lookup() should return definition given name and filepath', () => {
    assertEquals(
        lookup('someword', filepath), 
        'This is the definition of someword'
    )

    assertEquals(
        lookup('anotherword', filepath), 
        'Lorem ipsum delorum consectitor ada piscum'
    )

    assertEquals(
        lookup('nostrud', filepath), 
        'sed do eiusmod tempor incididunt ut labore'
    )
})

specify('lookup() should return undefined if word is not found', () => {
    assertEquals(
        lookup('hello', filepath),
        undefined
    )
})

specify('lookup() should throw if passed a non-string for word', () => {
    assertThrows(() => {
        lookup(1, filepath)
    })
})

specify('lookup() should throw if passed a non-string for word', () => {
    // this throws because fs.readFileSync throws if filepath is valid.
    // jest and other frameworks allow you to inspect the type of error.
    assertThrows(() => {
        lookup('someword', '/bad/file/path')
    })
})

specify('lookup() throws if dictionary is malformed', () => {
    const filepath = path.resolve(__dirname, 'dictionary-invalid.txt')
    assertThrows(() => {
        lookup('someword', filepath)
    })
})




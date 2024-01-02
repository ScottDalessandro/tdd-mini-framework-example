const fs = require('fs')

const lookup = (word, file) => {
    if(typeof word !== 'string') throw new Error('word must be a string')
    const fileText = fs.readFileSync(file, 'utf-8')
    
    const splitText = fileText.split('\n')
    const dict = splitText.reduce((dictionary, line) => {
        if(!line.trim()) return dictionary
        const parts = line.split(':::')        
        if (parts.length !== 2) throw new Error(`${file} appears to be malformed`)
        const [foundWord, definition] = parts.map(p => p.trim())
        dictionary[foundWord] = definition            
        
        return dictionary
    }, {})
    if(dict[word]) return dict[word]

    return undefined
    

}

module.exports = { lookup }
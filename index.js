const insecureApp = require('./insecure.app')
const secureApp = require('./secure.app')

insecureApp.listen(3000, () => {
    console.log('Listening on port 3000!')
})

secureApp.listen(3001, () => {
    console.log('Listening on port 3001')
})
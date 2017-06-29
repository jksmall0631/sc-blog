const express = require('express')
const path = require('path')
const app = express()
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000)

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
})

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

app.post('/api/v1/auth', (req, res) => {
  const {username, password} = req.body
  // const salt = bcrypt.genSaltSync();
  // const hash = bcrypt.hashSync(password, salt);
  database('user').where('username', username).select()
  .then(user => {
    // if(!comparePass(hash, bcrypt.hashSync(user[0].password, salt))){
    if(password != user[0].password){
      res.status(404).json({ message: 'Incorrect password.' })
    }
    res.status(200).json(user)
  })
  .catch(err => {
    res.status(404).json({ message: 'Email Not Found.' })
  })
})

app.post('/api/v1/blog', (req, res) => {
  const {title, date, content} = req.body
  const post = {title, date, content}
  database('posts').insert(post)
  .returning('*')
  .then(data => res.send(data))
  .catch(err => res.status(404).json(err))
})

app.get('/api/v1/blog', (req, res) => {
  database('posts').select()
  .then((posts) => {
    console.log(posts)
    response.status(200).json(posts)
  })
  .catch((error) => {
    response.status(404).json(error)
  })
})

app.listen(app.get('port'), () => {
  console.log(`Running on ${app.get('port')}`)
})

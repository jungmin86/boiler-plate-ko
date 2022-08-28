const express = require('express')
const app = express()
const port = 5000
//const bodyParser = require('body-parser');

const config = require('./config/key');

app.use(express.urlencoded({ extended: true }));

//app.use(bodyParser.json());

app.use(express.json());


const mongoose = require('mongoose');
const { User } = require('./models/User');


mongoose.connect(config.mongoURI, {
     //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 
  }).then(() => console.log('오류 개빡친다 ...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World우우우우우아!~영창띠~1255663'))


app.post('/register', (req,res) => {
   // 회원가입할때 필요한 정보들을 client에서 가져오면
   //그것들을 데이터베이스에 넣어준다.
   const user = new User(req.body);

   user.save((err, userInfo) => {
     if (err) return res.json({ success: false, err })
     return res.status(200).json({ success: true })
   })
 })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// var figlet = require("figlet");

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });
// http://localhost:3000/dog

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dog', (req, res) => {
  res.json("{'sound': '멍멍'}")
  
})

app.get('/cat', (req, res) => {
  res.json("{'sound': '야옹'}")
})

app.get('/user/:id', (req, res) => {
  // const p = req.params;
  // console.log(p.id)
  const q = req.query;
  console.log(q)
  res.json('너의 이름' + q.a + q.b + q.c)


})

app.get('/sound/:name', (req, res) => {
  const { name } = req.params;
  console.log(name)
  // const q = req.query;
  // console.log(q)
  // var a = {
  //   "dog":"sound:멍멍",
  //   "cat":"sound:야옹",
  //   "berd":"sound:쩩짹"
  // }
  // if (name == "dog") {
  //   res.json('멍멍')
  // }
  // if (name == "cat") {
  //   res.json('야옹')
  // }
  // if(name in a) {
  //   res.json(a[name])
  // } else {
  //   res.json('sound:모름')
  // }
  if (name == "dog") {
    res.json({"sound": "멍멍"})
  } else if (name == "cat") {
    res.json({"sound": "야옹"})
  } else if (name == "berd") {
    res.json({"sound": "짹짹"})
  } else {
    res.json({"sound": "모름"})
  }
  

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express');
const app = express();
const ejs = require('ejs')

// view engine setup
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const usersRouter = require('./routes/users')

app.use('/', usersRouter)




app.listen(3000,(req,res) => {
  console.log("Work")
})

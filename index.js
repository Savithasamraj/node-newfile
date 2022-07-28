const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.json())

let ts = Date.now()
console.log(ts)

let dates= new Date(ts);
let date = dates.getDate();
let month = dates.getMonth()+1;
let year = dates.getFullYear();


console.log(year + "-" + month + "-" + date);
const time = year + "-" + month + "-" + date
fs.writeFile('date-time.txt',`${time}`,(err) => {
    if(err) throw err
    console.log('File Created!!!')

})
app.get('/',function(req,res){
    res.json(time)

})

app.listen(3001)

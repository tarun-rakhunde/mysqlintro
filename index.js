var mysql = require('mysql');
var express=require("express")
const app=express()

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rakhunde@123",
  database:"test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.get("/fetch",(req,res)=>{
    con.query("SELECT * FROM test.new_table",function(err,result,fields) {
        if(err){
            console.log(err)
        }else{
            return res.send(result)
        }
    })
})
app.listen(1234,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("port 1234 running")
    }
})
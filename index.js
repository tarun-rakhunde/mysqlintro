var mysql = require('mysql');
var express=require("express")
const app=express()
app.use(express.json())

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
app.get("/",(req,res)=>{
    con.query("SELECT * FROM test.new_table",function(err,result,fields) {
        if(err){
            console.log(err)
        }else{
            return res.send(result)
        }
    })
})

app.post("/",(req,res)=>{
    const data=req.body;
    con.query("INSERT INTO test.new_table SET?",data,(error,results,fields)=>{
        if(error)throw error;
        res.send(results)
    })
})
app.listen(1234,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("port 1234 running")
    }
})
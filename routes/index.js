var express = require('express');
//var temperature = require('../Temprature/temprature.json');
var router = express.Router();
const fs = require('fs');

//console.log("the name of ");
//console. log(student);
//const{Client} = require('Client');

const{Client} = require('pg');
const client = new Client({
  host:"localhost",
  port:5432,
  user:"postgres",
  password:160210,
  database:"citytemprature"
});
client.connect();



//console.log("the name of ");
//console. log(student);
const path = require('path');


/* GET home page. */
router.get('/api/get-data', function(req, res, next) {

  
  // filePath = path.join(__dirname, '../Temprature/temprature.json');

//     fs. readFileSync(filePath,{ encoding: 'utf-8' }, function (err, data){
//         if (!err) {
//           res.header("Access-Control-Allow-Origin", "*");
//           res.setHeader('Content-Type', 'application/json');
//           res.send(data);
//           res.end();
//       } else {
//           console.log(err);} 
// });

client.query('SELECT * FROM ct WHERE city_name=$1 limit 1', [req.query.name],(err,result)=>{
  if(!err){
    console.log(result.rows);
    let data = result.rows;

     
    // let finalData = {
    //   text:'please enter city name among Dhaka,Khulna,Jessore,Satkhira',
    //   name: ' ',
    //   temph: '  ',
    //   templ: ' '
    // }
    // // console.log(req.query.name);
    //   for(let i=0; i<data.length; i++){
    //       if(req.query.name === data[i].name){
    //         finalData = data[i];
    //       }
          
    //   }
    //res.render('index', data);
    res.json(data[0]);

    return;
    
  }
  console.log(err)
 res.json([]);
 
client.end();
});

// const rawdata = fs. readFileSync(filePath, {encoding: 'utf-8'});

//  let temperature = JSON.parse(rawdata); 
//  let temperature = data; 


});

router.get('/', (req, res, next)=>{
  res.render('index');
})



module.exports = router;

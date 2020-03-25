// simple Express.js RESTful API
'use strict';

// initialize



const
  port = 8888,
  express = require('express'),
  app = express();

  
// /hello/ GET request

var x = [];
var y = [];
var z = [];
var i=1;
var l=0;
var s;
var lasnum  = 0;
var sum ;
y[0]=0;
y[1]=0;
y[2]=0;

z[0]=0;
z[1]=0;
z[2]=0;

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }

for(i=1;i<=3;i++)
  {
      x[i]=between(0,100);
  }

function gback(r)
{  if(r==1)
    {
     l++;
    if(l>3)
    {
        for(s=1;s<=2;s++)
        {
            x[s]=x[s+1];
        }
        x[3]=between(0,100);
        l=1;
    }
    return x[1];
    }
    if(r==2)
    {
        return 0;
    }
}

function valid(n)
{   
    if(n == 0)
    {
        y[0]=1;
    }
    if(n == 1 )
    {
        y[1]=1;
    }
    if(n == 2)
    {
        y[2]=1;
    }
    if( y[0]==1 && y[1]==1 && y[2]==1 && lasnum  == 0)
    {
        lasnum = 1;
        return 0;
    }


    if( y[0]==1 && y[1]==1 && y[2]==1 && lasnum  == 1)
    {  
       return gback(1);
      
    }
    else
    {
       return gback(2);
    }
    
}
function add(a,b,c)
{
  return a+b+c;
}
function validscore(q,w)
{   
    if(q==0)
    {
        z[0]=w;
    }
    if(q==1)
    {
        z[1]=w;
    }
    if(q==2)
    {
        z[2]=w;
    }
    if( z[0]!=0 && z[1]!=0 && z[2]!=0 && q==0)
    { sum=add(z[0],z[1],z[2])
      lasnum=0;
      y[0]=0;
      y[1]=0;
      y[2]=0;
      z[0]=0;
      z[1]=0;
      z[2]=0;
      return sum;
    }
    else return 0;
    }

  
 
app.get('/getnumber', function(req, res){
    res.send(
    { message:`${valid(parseInt(req.headers['number']))}`}
  )}
);

app.get('/getscore', function(req, res){
    res.json(
    { message:`${validscore(parseInt(req.headers['number']),parseInt(req.headers['score']))}`}
  )}
);




//  app.get('/restart', function (req, res, next) {
  //  process.exit(1);
    //})

// start server
app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);


//message: `Hello ${req.params.name || between(0,100)}!`
//:number?/:score?
//if(isNaN(w))
  //      {
    //        z[0]=z[0];
      //  }
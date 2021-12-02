const express=require("express");

const app= express();

const port = 8000

app.get('/', (req, res) => {
  res.send('Hello there!')
});

const admin= (req , res)=>{

  res.send('admin is here):');

}
const isAdmin=(req,res,next)=>{
  console.log("Is Admin middleware is running");
      // res.json({ message: 'true' });
     next();
}
const isLoggedIn=(req,res,next)=>{
  console.log("Is LoggedIn Checked");
  next();
}

app.get('/admin' ,isLoggedIn,isAdmin,admin)



app.get('/login' , (req , res)=>{

   res.send('you are on login route!')

})


app.get('/signup' , (req , res)=>{

   res.send('you are on signUp route')

})
app.get("/radhey",(req,res)=>{
    res.send("Radhey Uses Instagram!");
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});

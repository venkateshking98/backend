const express=require("express")
const app=express()
const port=3456;
const cors=require("cors")
const bodyParser=require("body-parser")
const Register=require("./registerschema.js")
console.log(Register)
const mongoose=require("mongoose")

app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb+srv://venkateshking:venky9893@cluster0.m9mkwv1.mongodb.net/FirsrDB?retryWrites=true&w=majority")

.then(()=>{
	console.log("Created mongodb Database")
	})
	.catch((err)=>{
		console.log(err)
	})


app.get("/",(req,res)=>{

})
app.post("/Register",(req,res)=>{
	const username="dummyuser",password="dummypassword"
	const newUser=new Register({
		username:username,
		password:password
	})
	newUser.save()
})


app.listen(port,()=>console.log("server is started"))

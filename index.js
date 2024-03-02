const express = require("express")
const collection = require("./DB")
const cors = require("cors")
const { connection } = require("mongoose")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/",cors(),(req,res)=>{
    console.log("Hiii");
    res.send(200);
})
app.post("/",async(req,res)=>{
    const{email,password}=req.body
    console.log("Hiii");
    try{
        const check= await collection.findOne({email:email})

        if(check){

            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("fail")
    }
})
app.get("/dashboard/:id" , (req , res)=>{
    const id = req.params['id'];
    console.log(id);
    collection.findOne({email:id})
    .then(ress => {
        console.log(ress)
        res.json(ress);});
})

app.post("/SignUp",async(req,res)=>{
    console.log("etered signup");
    const{email,password,age , name}=req.body
    const data={
        email:email,
        password:password , 
        name:name,
        age:age

    }
    try{
        const check=await collection.findOne({email:email})
        console.log(check)
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    }
    catch(e){
        console.log(e);
        res.json(e)
    }

})

app.post('/updateUser/:id',(req, res)=>{
    const id = req.params['id'];
    const arr = req.body;
        collection.updateOne({email:id},{
            $set:{
                name:arr.name,
                email:arr.email,
                age:arr.age,
            }
        }).then(ress => res.json(ress));
})

app.listen(8000,()=>{
    console.log("port connected");
})

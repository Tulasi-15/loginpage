const mongoose=require("mongoose")
mongoose.connect("mongodb://tulasi:za6eaEJHI87n4jSO@ac-ggwn327-shard-00-00.s3dtwmy.mongodb.net:27017,ac-ggwn327-shard-00-01.s3dtwmy.mongodb.net:27017,ac-ggwn327-shard-00-02.s3dtwmy.mongodb.net:27017/?ssl=true&replicaSet=atlas-q8dezj-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("mongodb connected");
})
.catch((e)=>{
    console.log(e);
})

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },name:{
        type:String,
        required:true
    },age:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection
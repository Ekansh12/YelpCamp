const mongoose =require("mongoose");

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then( ()=>{
    console.log("Mongoose Connected...");
})
.catch( (err)=>{
    console.log("Mongoose Error...");
    console.log(err);
})

const campgroundSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true,
        min:0
    },
    image:{
        type:String,
        required: true
    },
    description: String,
    location:{
        type:String,
        required: true
    },
    createdAt: { 
        type: Date,
        default: Date.now 
    },
    reviewsArray:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "review"
    }],
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    ratingSum: Number
})

const campground=mongoose.model("campground",campgroundSchema);

module.exports=campground;
const express=require("express");
const cors=require("cors");
const bodyparser=require("body-parser");
const app=express();

app.use(bodyparser.json({limit:'30mb',extended:true}))
app.use(bodyparser.urlencoded({limit:'30mb',extended:true}))
app.use(cors());

const PORT=4000;
app.use('/api', require('./routes/api'));

app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
})


app.get('api',(req,res)=>{
    res.json({message:"Hello World"});
});










const database = [];

const generateID = () => Math.random().toString(36).substring(2, 10);

app.get("/data/:id",async(req,res)=>{
    let result=await database.filter(_id);
    return res.json(result);
    
})


app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    
    let result = await database.filter(
        (user) => user.email === email || user.username === username
    );
    
    if (result.length === 0) {
        database.push({
            id: generateID(),
            username,
            password,
            email,
            timezone: {},
            schedule: [],
        });
        return res.json({ message: "Account created successfully!" });
    }
    
    res.json({ error_message: "User already exists!" });
});








app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    let result = await database.filter(
        (user) => user.username === username && user.password === password
    );
    
    if (result.length !== 1) {
        return res.json({
            error_message: "Incorrect credentials",
        });
    }
    
    res.json({
        message: "Login successfully",
        data: {
            _id: result[0].id,
            _email: result[0].email,
        },
    });
});



app.post("/schedule/create", async (req, res) => {
    const { userId, timezone, schedule } = req.body;
    
    let result = await database.filter((db) => db.id === userId);
    
    result[0].timezone = timezone;
    result[0].schedule = schedule;
    res.json({ message: "OK" });
});




app.get("/schedules/:id", async (req, res) => {
    const { id } = req.params;
    
    let result = await database.filter((db) => db.id === id);
    
    if (result.length === 1) {
        return res.json({
            message: "Schedules successfully retrieved!",
            schedules: result[0].schedule,
            username: result[0].username,
            timezone: result[0].timezone,
        });
    }
    
    return res.json({ error_message: "Sign in again, an error occured..." });
});




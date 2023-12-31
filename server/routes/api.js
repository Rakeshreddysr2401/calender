const router = require('express').Router();
const {google}=require('googleapis')
const GOOGLE_CLIENT_ID='315012989935-sqsgep24c0hjhliop51r3in7knut912h.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET='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'
const oauth2Client=new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  'http://localhost:3000'
)
const REFRESH_TOKEN=""
router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});
router.post('/create-tokens',async(req,res,next)=>{
  try{
      const {code}=req.body;
      const tokens=await oauth2Client.getToken(code);
      res.send(tokens);
  }
  catch(error){
    next(error)
  }
})
router.post('/create-event',async(req,res,next)=>{
  try{
    // const {summary,description,location,startDateTime,setEndDateTime}=req.body
    oauth2Client.setCredentials({refresh_token:REFRESH_TOKEN})
    const calendar=google.calendar(v3)
    const response= await calendar.events.insert({
      auth:oauth2Client,
      calendarId:'primary',
      requestBody:{
        summary:summary,
        description:description,
        location:location,
        colorId:'7',
        start:{
          dateTime:new Date(startDateTime),
        },
        end:{
          dateTime:new Date(endDateTime),
        },
      },
    })
  }
  catch(error){
    next(error)
  }
})

module.exports = router;
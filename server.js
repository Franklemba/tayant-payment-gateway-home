require("dotenv").config()
const express = require('express')
const app = express();
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose')
const passport = require('passport')

// Route definitions
const homeRouter = require('./routes/home');
// const userRouter = require('./routes/user');
// const authRouter = require('./routes/auth')
// const reportRouter = require('./routes/reports')

// const { ensureAuthenticated} = require('./config/auth');
// const {generateRateLimitPage} = require('./utilities/htmlUtils')

////////////database connection////////////



// "mongodb://localhost:27017/tayantPay"
// process.env.MONGODBURL
const localDB = "mongodb://127.0.0.1:27017/paymentGateWay-homepage"
const liveDB = "mongodb+srv://odtm00:xoxo1212@tayantpay.00zqadh.mongodb.net"
mongoose.set('strictQuery', true);
const mainDB =liveDB

mongoose.connect(mainDB,{useNewUrlParser: true}).then(() => {
  console.log('database is connected')
}).catch((err) => console.log('error connecting to database ', err))
  

// Server setup
// require('./config/passport')(passport);

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views/')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
app.use(express.urlencoded({ extended: false }))

app.set('trust proxy', 1);

 // Session configuration
const sessionStore = MongoStore.create({ 
  mongoUrl: mainDB,
  ttl: 14 * 24 * 60 * 60 // 14 days
});


// app.use(limiter);



app.use(session({
  secret: process.env.SESSION_SECRET || 'mysecret',
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Routes
// app.use('/auth', authRouter);
app.use('/',homeRouter);
// app.use('/users', userRouter);

app.listen(process.env.PORT || 3330, () => console.log('Server is Running on port: 3330'))
import express from 'express';
import path  from 'path';
import favicon from 'serve-favicon';
import logger  from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import config from './config/config';
import index  from './routes/index';
import users from './routes/users';
import update from './routes/update';
import deletee from './routes/deletee';
import mongoose from 'mongoose';
import Schema  from './model/Schema';
let app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/Schema', Schema);
app.use('/update', update);
app.use('/deletee', deletee);
// mongo connection
mongoose.connect(config.dbUrl);
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error :'));
// catch 404 and forward to error handler
app.use((req, res, next) =>{
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;

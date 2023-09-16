//Kruthikk Namasivayam Mohanasundaram
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const app = express();
//This is CORS Ref:https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
var corsOptions = {

origin: "http://localhost:8080"
};
app.use(cors(corsOptions));
// 1) MIDDLEWARES Morgan is used for debugging
if (process.env.NODE_ENV === 'development') {
app.use(morgan('dev'));
}
// 2)MIDDLEWARE json is used for injecting the body attribute in the pipeline
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
console.log('Hello from the middleware 👋');
next();
});
// 3) MIDDLE ROUTES loading
const salesRouter = require('./routes/salesRoutes');
const userRouter = require('./routes/userRoutes');
const orderRouter = require('./routes/orderRoutes');
const addressRouter = require('./routes/addressRoutes');
const joinRouter = require('./routes/joinRoutes');
app.use('/api/v1/sales', salesRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/order', orderRouter);
app.use('/api/v1/address', addressRouter);
app.use('/api/v1/join', joinRouter);
module.exports = app;
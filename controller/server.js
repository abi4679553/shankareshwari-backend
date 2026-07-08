require('dotenv').config({quiet:true})
const listen = require("./config/Listen")
const mongoose = require("mongoose")
const connectDb = require("./config/db")
const IndexRouter = require('./router/index')


const express = require("express")
const app = express();

app.use(express.json());


listen(app)
connectDb(mongoose)
app.use(IndexRouter)
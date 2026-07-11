require('dotenv').config({quiet:true})
const listen = require("./config/Listen")
const mongoose = require("mongoose")
const connectDb = require("./config/db")
const IndexRouter = require('./router/index')
const cors = require ("cors")

const express = require("express")
const app = express();
app.use(cors());
app.use(express.json());


connectDb(mongoose)

listen(app)

app.use(IndexRouter)
require('dotenv').config({quiet:true})
const listen = require("./config/Listen")
const mongoose = require("mongoose")
const connectDb = require("./config/db")


const express = require("express")
const app = express();


listen(app)
connectDb(mongoose)

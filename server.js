const fs = require ('fs');
const express= require ('express');
const path= require ('path');
const api= require ('./public/assets/index.js')

const PORT = process.env.port || 3001

const app = express();
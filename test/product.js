const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
let server = require('../server');
let Product = require("../models/product");
chai.use(chaiHttp);
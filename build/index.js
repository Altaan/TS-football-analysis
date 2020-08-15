"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// Reading the csv file and converting some of the data
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load(); // after this matchReader.matches will have the transformed data
// Getting the summary
var summary = Summary_1.Summary.winsAnalysisInHtml("Arsenal");
summary.buildAndPrintReport(matchReader.matches);

import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// Reading the csv file and converting some of the data
const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load(); // after this matchReader.matches will have the transformed data

// Getting the summary
const summary = Summary.winsAnalysisInHtml("Arsenal");
summary.buildAndPrintReport(matchReader.matches);

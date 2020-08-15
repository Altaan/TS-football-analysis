"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var CsvFileReader_1 = require("./CsvFileReader");
// This class will convert the reader instance data
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    // Generating preconfigured instance of MatchReader
    MatchReader.fromCsv = function (filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    };
    MatchReader.prototype.load = function () {
        this.reader.read();
        // converting string data to dates and numbers where needed
        this.matches = this.reader.data.map(function (row) {
            return [
                // Date
                utils_1.dateStringToDate(row[0]),
                // Home team
                row[1],
                // Away team
                row[2],
                // Home team score
                parseInt(row[3]),
                // Away team score
                parseInt(row[4]),
                // Winning team
                row[5],
                // Referee
                row[6],
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;

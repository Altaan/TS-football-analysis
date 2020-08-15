"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Converting a string to date obj
exports.dateStringToDate = function (dateString) {
    var dateParts = dateString.split("/").map(function (value) {
        return parseInt(value);
    });
    // return date of format: YYYY/MM/DD
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

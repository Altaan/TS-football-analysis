import fs from "fs";

// This class is used to read a csv file
export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      // splitting the string rows to string[] rows
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}

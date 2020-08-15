import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
  read(): void;
  data: string[][];
}

// This class will convert the reader instance data
export class MatchReader {
  // Generating preconfigured instance of MatchReader
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    // converting string data to dates and numbers where needed
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          // Date
          dateStringToDate(row[0]),
          // Home team
          row[1],
          // Away team
          row[2],
          // Home team score
          parseInt(row[3]),
          // Away team score
          parseInt(row[4]),
          // Winning team
          row[5] as MatchResult, // type assertion to overwrite the type inference
          // Referee
          row[6],
        ];
      }
    );
  }
}

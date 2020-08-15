import { MatchResult } from "./MatchResult";

// defining a tuple type to be used for every row of data
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

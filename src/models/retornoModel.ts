// To parse this data:
//
//   import { Convert, RetornoModel } from "./file";
//
//   const retornoModel = Convert.toRetornoModel(json);

// export interface RetornoModel {
//   command: string;
//   rowCount: number;
//   oid: string;
//   rows: object;
// }

export class RetornoModel {
  command: string;
  rowCount: number;
  rows: object;

  constructor(command = "", rowCount = 0, rows = {}) {
    this.command = "";
    this.rowCount = 0;
    this.rows = {};
  }
}

// Converts JSON strings to/from your types
export class ConvertRetornoModel {
  public static toRetornoModel(json: string): RetornoModel {
    return JSON.parse(json);
  }

  public static retornoModelToJson(value: RetornoModel): string {
    return JSON.stringify(value);
  }
}

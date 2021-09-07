import pool from "../configs/db_config";
import { Log } from "../commons/log";
import * as Config from "../configs/config.json";
import { ConvertRetornoModel, RetornoModel } from "../models/retorno_model";
import { rm } from "fs";

export class Repository {
  // constructor() {}

  static async DbQueryList(query: { text: string; values: any }) {
    let client = await pool.connect();
    const result = await client.query(query);
    Config.poolLog
      ? Log.print(
          "pool total.: " +
            pool.totalCount +
            ", idle.: " +
            pool.idleCount +
            ", waiting.: " +
            pool.waitingCount
        )
      : null;
    client.release();
    Config.queryLog ? Log.print(query.text) : null;
    Config.queryParametersLog ? Log.print(query.values) : null;
    Config.queryResultLog ? Log.print(result.rows) : null;
    return result.rows;
  }

  static async DbQueryObject(query: { text: string; values: any }) {
    let client = await pool.connect();
    const result = await client.query(query);
    Config.poolLog
      ? Log.print(
          "pool total.: " +
            pool.totalCount +
            ", idle.: " +
            pool.idleCount +
            ", waiting.: " +
            pool.waitingCount
        )
      : null;
    client.release();
    Config.queryLog ? Log.print(query.text) : null;
    Config.queryParametersLog ? Log.print(query.values) : null;
    Config.queryResultLog ? Log.print(result.rows[0]) : null;
    return result.rows[0];
  }

  static async DbQueryRowCount(query: { text: string; values: any }) {
    let client = await pool.connect();
    const result = await client.query(query);
    Config.poolLog
      ? Log.print(
          "pool total.: " +
            pool.totalCount +
            ", idle.: " +
            pool.idleCount +
            ", waiting.: " +
            pool.waitingCount
        )
      : null;
    client.release();
    Config.queryLog ? Log.print(query.text) : null;
    Config.queryParametersLog ? Log.print(query.values) : null;
    Config.queryResultLog ? Log.print(result.rowCount.toString()) : null;
    return result.rowCount;
  }

  static async DbReturnBoolByCountQuery(query: { text: string; values: any }) {
    let client = await pool.connect();
    const result = await client.query(query);
    Config.poolLog
      ? Log.print(
          "pool total.: " +
            pool.totalCount +
            ", idle.: " +
            pool.idleCount +
            ", waiting.: " +
            pool.waitingCount
        )
      : null;
    client.release();
    Config.queryLog ? Log.print(query.text) : null;
    Config.queryParametersLog ? Log.print(query.values) : null;
    Config.queryResultLog ? Log.print(result.rowCount.toString()) : null;

    let chkLogin = false;
    if (result.rows[0].count == "0") {
      chkLogin = false;
    } else {
      chkLogin = true;
    }
    return chkLogin;
  }

  static async DbQueryListEncapsulated(query: { text: string; values: any }) {
    let client = await pool.connect();
    const result = await client.query(query);
    Config.poolLog
      ? Log.print(
          "pool total.: " +
            pool.totalCount +
            ", idle.: " +
            pool.idleCount +
            ", waiting.: " +
            pool.waitingCount
        )
      : null;
    client.release();
    Config.queryLog ? Log.print(query.text) : null;
    Config.queryParametersLog ? Log.print(query.values) : null;
    Config.queryDetails
      ? Log.print(result.command + " - " + result.rowCount + " row(s)")
      : null;
    Config.queryResultLog ? Log.print(result.rows) : null;

    const rm = new RetornoModel();
    rm.command = result.command;
    rm.rowCount = result.rowCount;
    rm.rows = result.rows;
    // Log.print(rm);
    return rm;
  }

  static async DbQueryObjectEncapsulated(query: { text: string; values: any }) {
    let client = await pool.connect();
    const result = await client.query(query);
    Config.poolLog
      ? Log.print(
          "pool total.: " +
            pool.totalCount +
            ", idle.: " +
            pool.idleCount +
            ", waiting.: " +
            pool.waitingCount
        )
      : null;
    client.release();
    Config.queryLog ? Log.print(query.text) : null;
    Config.queryParametersLog ? Log.print(query.values) : null;
    Config.queryDetails
      ? Log.print(result.command + " - " + result.rowCount + " row(s)")
      : null;
    Config.queryResultLog ? Log.print(result.rows) : null;

    const rm = new RetornoModel();
    rm.command = result.command;
    rm.rowCount = result.rowCount;
    rm.rows = result.rows[0];
    // Log.print(rm);
    return rm;
  }
}

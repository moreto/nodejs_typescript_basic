import { Request, Response } from "express";
import Config from "../configs/config.json";
import { Log } from "../commons/log";
import { RootRepository } from "../repositories/rootRepository";

class RootController {
  constructor() {}

  async root(request: Request, response: Response) {
    var pjson = require("../../package.json");
    let onLine = "";
    // let checkCn;

    // try {
    //   const rootRepository = new RootRepository();
    //   checkCn = await rootRepository.checkOnLine();

    //   if (checkCn != null) {
    //     onLine = "OnLine :)";
    //   } else {
    //     onLine = "OffLine :(";
    //   }
    // } catch (error) {
    //   onLine = "OffLine :(   " + error;
    // }

    const log = {
      name: pjson.name,
      description: pjson.description,
      version: pjson.version,
      host: request.headers.host,
      email: Config.emailContact,
      dataBaseStatus: onLine,
      // database: checkCn.current_database,
    };
    Log.print(log);

    return response.status(201).json(log);
  }
}

export { RootController };

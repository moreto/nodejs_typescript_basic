import { Log } from "../commons/log";
import { Repository } from "./repository";

class RootRepository {
  async checkOnLine() {
    try {
      const query = {
        text: "select current_database()",
        values: [],
      };

      return await Repository.DbQueryObject(query);
    } catch (error) {
      // Log.log(error);
      throw error;
    }
  }
}

export { RootRepository };

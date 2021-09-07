import * as Config from "../configs/config.json";

export class Log {
  // constructor(parameters) {}
  static print(text: Object, group: string = "") {
    let textLog = text;

    group != "" ? console.group(group) : null;
    Config.showConsole ? console.log(textLog) : null;
    group != "" ? console.groupEnd() : null;
  }

  static log(text: Object) {
    let textLog = text;
    console.log(textLog);
  }
}

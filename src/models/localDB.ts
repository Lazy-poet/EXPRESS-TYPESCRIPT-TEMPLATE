import fs from "fs";
import path from "path";
import { promisify } from "util";

const writeFileAsync = promisify(fs.writeFile);
const readFileAsync = promisify(fs.readFile);
const dataDirectory = path.join(__dirname, "../../data");

export default class LocalDBModel {
  constructor() {
    if (!fs.existsSync(dataDirectory)) {
      fs.mkdirSync(dataDirectory);
    }
  }
  public addDataToDB = async (dbname: string, data: Record<string, any>) => {
    const oldData = await this.getDataFromDB(dbname);
    if (Array.isArray(oldData)) {
      oldData.push(data);
    }
    console.log("old data ", oldData);
    await writeFileAsync(
      path.join(dataDirectory, `${dbname}.json`),
      JSON.stringify(oldData, null, 2)
    );
    console.log("file written");
  };

  public getDataFromDB = async (dbname: string) => {
    try {
      const data = await readFileAsync(
        path.join(dataDirectory, `${dbname}.json`),
        "utf-8"
      );
      console.log("data", data);

      return Array.isArray(JSON.parse(data)) ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  };
}

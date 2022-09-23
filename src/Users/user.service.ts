import LocalDBModel from "../models/localDB";
export class UserService {
  private readonly dbname = "users";
  async addUser(data: Record<string, any>) {
    const db = new LocalDBModel();
    await db.addDataToDB(this.dbname, data);
    return true;
  }
  async getAllUsers() {
    const db = new LocalDBModel();
    const res = await db.getDataFromDB(this.dbname);
    return res;
  }
}

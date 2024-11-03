import { Role } from "../models/index.js";

async function roleSeed() {
  await Role.bulkCreate([{ name: "Admin" }, { name: "User" }]);
}

export default roleSeed;
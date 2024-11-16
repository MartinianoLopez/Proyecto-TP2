import { Role } from "../models/index.js";

async function roleSeed() {
  const rolesDePrueba = [
    { name: "Admin" },
    { name: "User" },
  ];

  try {
    await Role.bulkCreate(rolesDePrueba);
    console.log("- Roles creados:");
    console.table(rolesDePrueba);
  } catch (error) {
    console.error("Error al crear roles:", error);
  }
}

export default roleSeed;
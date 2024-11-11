import { User } from "../models/index.js";


async function userSeed() {
     await User.bulkCreate([
          { name: "Osval", mail: "osval@gmail.com", pass: "1234", RoleId: 1 },
          { name: "Mariana", mail: "mariana@gmail.com", pass: "abcd", RoleId: 2 },
          { name: "Carlos", mail: "carlos@yahoo.com", pass: "pass123", RoleId: 1 },
          { name: "Lucía", mail: "lucia@hotmail.com", pass: "lucia2023", RoleId: 2 },
          { name: "Fernando", mail: "fernando@gmail.com", pass: "fernando99", RoleId: 2 },
          { name: "Sofía", mail: "sofia@outlook.com", pass: "securepass", RoleId: 1 },
          { name: "Jorge", mail: "jorge@gmail.com", pass: "jorge123", RoleId: 2 },
          { name: "Ana", mail: "ana@gmail.com", pass: "password", RoleId: 1 }
        ]);
}
export default userSeed;
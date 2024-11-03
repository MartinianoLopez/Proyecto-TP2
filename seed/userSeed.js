import { User } from "../models/index.js";


async function userSeed() {
     await User.bulkCreate([{name:"Osval", mail:"osval@gmail.com", pass:"1234", RoleId:1}])
}


await userSeed()
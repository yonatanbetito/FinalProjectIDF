import { getAllUsersDB,createUserDB } from "../DAL/user.dal.js";

// get all users
export async function getusers() {
  return await getAllUsersDB();
}
//create user
export async function createUser(userData) {
  return await createUserDB(userData);
}

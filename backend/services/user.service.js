import { getAllUsersDB } from "../DAL/user.dal.js";

// get all users
export async function getusers() {
  return await getAllUsersDB();
}
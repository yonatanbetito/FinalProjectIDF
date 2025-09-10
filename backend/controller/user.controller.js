import { getusers } from "../services/user.service.js";

//all users
export async function allusers(req, res) {
  try {
    const users = await getusers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

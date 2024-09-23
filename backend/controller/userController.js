const dbcon = require("../db/db-config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

async function register(req, res) {
const { username, firstname, lastname, email, password } = req.body;

if (!email || !password || !firstname || !lastname || !username) {
  return res.status(400).json({ msg: "please provide all required fields" });
}


try{

  const [user] = await dbcon.query("select user_name,user_id from users where user_name= ? or email =?", [username, email] );

  // return res.json({user:user})
  if (user.length > 0) {
    return res.status(400).json({ msg: "user already registered" });
  }
  if (password.length < 8)
  return res
    .status(400)
    .json({ msg: "password must be at least 8 characters" });

    // encypt password
 const salt = await bcrypt.genSalt(10);
 const hashedPassword = await bcrypt.hash(password,salt)
 

await dbcon.query("INSERT INTO users (user_name,first_name,last_name,email,password) VALUES(?,?,?,?,?)",[username,firstname,lastname,email,hashedPassword])
return res.status (201).json({ msg: "user register" })
}

catch (error) {
console.log(error.message)
return res.status(500).json({msg:"someting went wrong, try again later"})
}
}

async function login(req, res) {
  const {email,password} = req.body;
  if(!email || !password){
    return res.status(400).json({msg:"please enter all the required fields"})
  }

  try{
  const [user] = await dbcon.query("select user_name, user_id, password from users where email = ? ",[email])
  // return res.json({ user: user });
  if (user.length == 0) {
    return res
      .status(400)
      .json({ msg: "invalid credential" });
  }
  // compare password
  const isMatch = await bcrypt.compare(password, user[0].password);
  if (!isMatch) {
    return res
      .status(400)
      .json({ msg: "invalid credential" });
  }

const username = user[0].user_name
const userid= user[0].user_id;
const token = jwt.sign({ username, userid}, "secret", { expiresIn: "1d" })
return res.status (200).json({ msg: "user login successful", token,username,userid })
  // return res.json({ user });

  }
  catch(error){
console.log(error.message);
return res.status(500).json({ msg: "someting went wrong, try again later" });
  }

}

async function checkuser(req, res) {
  const username = req.user.username;
   const userid = req.user.userid;
  res.status (200).json({ msg: "valid user",username ,userid})

}




async function updateUser(req, res) {
  const userId = req.params.userId;
  const { user_name, first_name, last_name, email, password, profile_picture } =
    req.body;

  // Check if the user exists
  const [existingUser] = await dbcon.execute(
    "SELECT * FROM users WHERE user_id = ?",
    [userId]
  );
  if (existingUser.length === 0) {
    return res.status(404).json({ msg: "User not found" });
  }

  try {
    // Update the user data in the database
    const updateFields = [];
    if (user_name) updateFields.push(`user_name = '${user_name}'`);
    if (first_name) updateFields.push(`first_name = '${first_name}'`);
    if (last_name) updateFields.push(`last_name = '${last_name}'`);
    if (email) updateFields.push(`email = '${email}'`);
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updateFields.push(`password = '${hashedPassword}'`);
    }

    if (profile_picture) {
      // Handle the profile picture upload here
      // You can use a storage service like AWS S3 to store the image and save the path to the database
    }

    if (updateFields.length === 0) {
      return res.status(400).json({ msg: "No fields to update" });
    }

    const updateQuery = `UPDATE users SET ${updateFields.join(
      ", "
    )} WHERE user_id = ?`;
    await dbcon.execute(updateQuery, [userId]);

    return res.status(200).json({ msg: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    return res
      .status(500)
      .json({ msg: "Something went wrong, try again later" });
  }
}



module.exports = {
  register,
  login,
  checkuser,
  updateUser
};

import User from "../Model/User.js";
import Role from "../Model/Role.js";

export const createUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // creating a new User
    const user = new User({
      username,
      email,
      password,
      identidad,
      gerencia,
      roles: rolesFound.map((role) => role._id),
    });

    // encrypting password
    user.password = await User.encryptPassword(user.password);

    // saving the new user
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      identidad: savedUser.identidad,
      gerencia: savedUser.gerencia,
      roles: savedUser.roles,

    });
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async (req, res) => {
  //ver el rol del usuario 
  try {
    const users = await User.find();
    res.json(users);
  }
  catch (error) {
    console.error(error);
  }


};

export const getUser = async (req, res) => {
  try {
    const { idUser } = req.params;
    const user = await User.findById(idUser)
    res.json(user);
  }
  catch (error) {
    console.error(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { idUser } = req.params;
    const { username, email, password, identidad, gerencia, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });


    // encriptar la contraseña y actualizar el usuario 
    const updated = await User.findByIdAndUpdate(idUser, {
        username,
        email,
        identidad,
        gerencia,
        password: await User.encryptPassword(password),
        roles: rolesFound.map((role) => role._id),
      }, { new: true });

    res.json(updated);

  }
  catch (error) {
    console.error(error);
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { idUser } = req.params;
    await User.findByIdAndDelete(idUser);
    res.json({ message: "User Deleted Successfully" });
  }
  catch (error) {
    console.error(error);
  }
}




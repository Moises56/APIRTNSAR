import jwt from "jsonwebtoken";
import User from "../Model/User.js";
import Role from "../Model/Role.js";
import { SECRET } from "../config.js";

export const signupHandler = async (req, res) => {
  try {
    const { username, email, password, identidad, gerencia, roles } = req.body;

    // Creating a new User Object
    const newUser = new User({
      username,
      email,
      password,
      identidad,
      gerencia,
      roles
    });

    // checking for roles
    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    // Saving the User Object in Mongodb
    const savedUser = await newUser.save();

    // Create a token
    const token = jwt.sign({ id: savedUser._id }, SECRET, {
      expiresIn: 86400, // 24 hours
    });

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const signinHandler = async (req, res) => {
  try {
    // Request body email can be an email or username
    const userFound = await User.findOne({ email: req.body.email }).populate(
      "roles"
    );

    if (!userFound) return res.json({ message: "Usuario No Encontrado" });

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res.json({
        token: null,
        message: "Contraseña Incorrecta",
      });

    const token = jwt.sign({ id: userFound._id }, SECRET, {
      expiresIn: 86400, // 24 hours
    });

    // res.json({ token });
    res.send({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      identidad: userFound.identidad,
      gerencia: userFound.gerencia,
      roles: userFound.roles.map((role) => "ROLE_" + role.name.toUpperCase()),
      accessToken: token,
    });

  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
};

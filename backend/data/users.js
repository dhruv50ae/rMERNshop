import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Genji Shimada",
    email: "genji@notadmin.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Hanzo Shimada",
    email: "hanzo@notadmin.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users
const db = require("../db");
const User = require("../models/user");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const users = [
    {
      username: "Test-1",
      email: "test1@example.com",
      password_digest: "fakepassword",
      userPermissions: "admin",
    },
    {
      username: "Test-2",
      email: "test2@example.com",
      password_digest: "fakepassword",
      userPermissions: "admin",
    },
  ];

  await User.insertMany(users);
  console.log("Created users!");
};
const run = async () => {
  await main();
  db.close();
};

run();

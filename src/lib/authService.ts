import User from "@/data/users.json";

// mock token generation service
const generateMockToken = (user : User) => {
  const tokenData = {
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
    },
    exp: Math.floor(Date.now() / 1000) + 3600,
  };

  return btoa(JSON.stringify(tokenData));
};

// mock login service
export const loginUser = async (credentials: { email: string; password: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const user = User.users.find(
    (user) =>
      user.email === credentials.email && user.password === credentials.password
  );
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const token = generateMockToken(user);

  return JSON.stringify({ user, token });
};

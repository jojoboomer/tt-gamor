import User from "@/data/users.json";

const generateMockToken = (user) => {
  const tokenData = {
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
    },
    // Fecha actual + 1 hora
    exp: Math.floor(Date.now() / 1000) + 3600,
  };

  // Simulamos un token codificado en base64
  return btoa(JSON.stringify(tokenData));
};

export const loginUser = async (credentials: any) => {
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

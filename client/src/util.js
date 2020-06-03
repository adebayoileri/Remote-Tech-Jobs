const prodApiBase = "/";
const devApiBase = "http://localhost:3200/";
export const apiBase =
  process.env.NODE_ENV === "development" ? devApiBase : prodApiBase;
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: process.env.TS_NODE_DEV
    ? path.resolve(__dirname, "../.env.dev")
    : path.resolve(__dirname, "../.env"),
});

const { PORT, PRIVATE_KEY, PUBLIC_KEY, DB_URI, ORIGIN, DOMAIN } = process.env;

export default {
  origin: ORIGIN?.split(","),
  port: PORT,
  dbUri: DB_URI,
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "7d",
  publicKey: PUBLIC_KEY,
  privateKey: PRIVATE_KEY,
  domain: DOMAIN,
};

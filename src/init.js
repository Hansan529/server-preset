import "dotenv/config";

import "./db";
import app from "./server";

const PORT = 80;

const handleListening = () => {
  console.log(
    `[localhost           ] 🐤 http://localhost:${PORT} 포트에서 listening 하고 있습니다.`
  );
  console.log(
    `[hyeonServer - http  ] 🐤 http://hxan.net 에서 listening 하고 있습니다.`
  );
};

app.listen(PORT, handleListening);

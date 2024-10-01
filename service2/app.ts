import * as express from 'express';
import { execSync } from 'node:child_process'

const app = express();

function getContainerInfo() {
  const ipAddress = execSync('hostname -I').toString().trim();
  const processes = execSync('ps -ax').toString();
  const diskSpace = execSync('df -h /').toString();
  const uptime = execSync('uptime -p').toString();

  return {
    ipAddress,
    processes,
    diskSpace,
    uptime
  };
}

app.get('/', (req, res) => {
  res.json(getContainerInfo());
});

app.listen(8200, () => {
  console.log('Service2 is running on port 8200');
});
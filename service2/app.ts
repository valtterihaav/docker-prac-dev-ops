import express from "express";
import { Request, Response, Express } from 'express';
import { execSync } from 'node:child_process'

// init app
const app: Express = express();

/**
 * Get information about the container
 * 
 * @returns Info about the container as a dictionary
 */
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

/**
 * Get information about the container
 */
app.get('/', (req: Request, res: Response) => {
  res.json(getContainerInfo());
});

/**
 * Health check
 */
app.listen(8200, () => {
  console.log('Service2 is running on port 8200');
});
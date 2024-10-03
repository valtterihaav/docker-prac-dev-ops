import express from "express";
import { Request, Response, Express } from 'express';
import { execSync } from 'node:child_process'

// init app
const app: Express = express();

/**
 * Interface for the container information
 */
interface ContainerInfo {
  ipAddress: string;
  processes: string[];
  diskSpac: string[];
  uptime: string;
}

/**
 * Get information about the container
 * 
 * @returns Info about the container as a dictionary
 */
function getContainerInfo() {
  const ipAddress = execSync('hostname -i').toString().trim();
  const processes = execSync('ps -ax').toString().split('\n');
  const diskSpace = execSync('df -h /').toString().split('\n');
  const uptime = execSync('uptime -p').toString();

  // combine and return the information
  const info: ContainerInfo = {
    ipAddress: ipAddress,
    processes: processes,
    diskSpac: diskSpace,
    uptime: uptime
  };
  return info;
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
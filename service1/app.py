"""
Some basic api for subprocess info
"""

import subprocess
from fastapi import FastAPI
import requests

# init app
app = FastAPI()


# root endpoint
@app.get("/")
async def read_root():
    """
    Root endpoint.
    """
    ip_address = subprocess.getoutput("hostname -i")
    processes = subprocess.getoutput("ps -ax").splitlines()
    disk_space = subprocess.getoutput("df -h /").splitlines()
    uptime = subprocess.getoutput("uptime -p")

    # query the second api, use the service2 hostname
    # as per docker compose file
    api_url = "http://service2:8200/"

    try:
        response = requests.get(api_url, timeout=10)
        response = response.json()

    except requests.exceptions.RequestException as e:
        response = {"error": str(e)}

    return {
        "Service1": {
            "ip_address": ip_address,
            "processes": processes,
            "disk_space": disk_space,
            "uptime": uptime,
        },
        "Service2": response,
    }

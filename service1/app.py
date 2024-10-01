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
    ip_address = subprocess.getoutput("hostname -I")
    processes = subprocess.getoutput("ps -ax")
    disk_space = subprocess.getoutput("df -h /")
    uptime = subprocess.getoutput("uptime -p")

    # query the second api
    api_url = "http://localhost:8200/"

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

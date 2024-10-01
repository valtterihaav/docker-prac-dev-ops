"""
Some basic api for subprocess info
"""

import subprocess
from fastapi import FastAPI

# init app
app = FastAPI()


# root endpoint
@app.get("/")
def read_root():
    """
    Root endpoint.
    """
    ip_address = subprocess.getoutput("hostname -I")
    processes = subprocess.getoutput("ps -ax")
    disk_space = subprocess.getoutput("df -h /")
    uptime = subprocess.getoutput("uptime -p")

    return {
        "ip_address": ip_address,
        "processes": processes,
        "disk_space": disk_space,
        "uptime": uptime,
    }

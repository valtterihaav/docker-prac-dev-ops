# start from python image
FROM python:3.12

# set the working directory
WORKDIR /service1

# create virtual environment and activate it
RUN python -m venv .venv
RUN .venv/bin/activate

# copy the package.json file
COPY requirements.txt requirements.txt

# install the dependencies into venv
RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 8199

# start the FastAPI, on port 8080
CMD ["uvicorn", "app:app", "--port", "8199"]

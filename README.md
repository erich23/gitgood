# gitgood
Tool for visualizing statistics in for github repositories


## Getting Started

We're using a python virtual environment to make sure we all use the same version of libraries. What this means is that when developing the app, your project directory will be within a "virtual environment" that has its own set of python libraries installed. Here's how to get started with using the virtual environment:

1. `python3 -m venv venv` will create a virtual environment called `venv`
2. `. venv/bin/activate` will enter you into the virtual environment
3. `pip install -r requirements.txt` will make sure all the packages you need are installed
4. You can run the command `deactivate` to disable the virtual environment on the project


## When you add new libraries to the project

1. run `pip freeze > requirements.txt` to update `requirements.txt` with all of the packages before pushing up

## Starting the Flask app

1. `export FLASK_APP=server.py` will tell flask to find the app in the file `server.py`.
2. `export FLASK_ENV=development` will set the flask environment to development mode. Development mode shows an interactive debugger whenever a page raises an exception, and restarts the server whenever you make changes to the code.
3. `flask run` will run the server.
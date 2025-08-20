from flask import Flask, render_template

app = Flask(__name__)

@app.route("/") #Decorador
def index():
    return render_template("index.html")

@app.route("/mision") #Decorador
def mision():
    return render_template("mision.html")

@app.route("/login") #Decorador
def login():
    return render_template("login.html")

@app.route("/register") #Decorador
def register():
    return render_template("register.html")

if __name__ == "__main__":
    app.run(debug=True, port=8000)
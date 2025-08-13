from flask import Flask, render_template

app = Flask(__name__)

@app.route("/") #Decorador
def home():
    return render_template("index.html")

@app.route("/mision") #Decorador
def mision():
    return render_template("mision.html")

if __name__ == "__main__":
    app.run(debug=True, port=8000)
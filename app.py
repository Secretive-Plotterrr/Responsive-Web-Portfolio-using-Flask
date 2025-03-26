# D:\PL-Portfolio\app.py
from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = "a96aaadadf0b9311263575ae77553e23"  # Your secret key

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
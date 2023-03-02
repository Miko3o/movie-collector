from flask import Flask, render_template, request
from flask_mysqldb import MySQL
import yaml
import hashlib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

db = yaml.safe_load(open('db.yaml'))
app.config['MYSQL_HOST'] = db['mysql_host']
app.config['MYSQL_USER'] = db['mysql_user']
app.config['MYSQL_PASSWORD'] = db['mysql_password']
app.config['MYSQL_DB'] = db['mysql_db']

mysql = MySQL(app)

@app.route('/create_account', methods=['GET', 'POST'])
def CreateAccount():
    if request.method == 'POST':
        #Fetch form data
        userDetails = request.json
        print("userDetails:", str(userDetails))
        userName = userDetails['usernameInput']
        userPasswordToHash = userDetails['passwordInput']
        userPassword = HandlePasswordHashing(userPasswordToHash)
        cur = mysql.connection.cursor()
        cur.execute('INSERT INTO userlogindata(userName, userPassword) VALUES(%s, %s)', (userName, userPassword))
        mysql.connection.commit()
        cur.close()
        return '200'
    return 'hi'

def HandlePasswordHashing(passwordToHash):
    hashPassword = hashlib.md5(passwordToHash.encode())
    md5Hash = hashPassword.hexdigest
    return md5Hash
    
        

@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

if __name__ == "__main__":
    app.run(debug=True)
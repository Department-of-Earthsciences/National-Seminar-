from flask import Flask, request
import smtplib

app = Flask(__name__)

@app.route('/approve-abstract', methods=['POST'])
def approve_abstract():
    email = request.form['email']
    send_email(email)
    return "Approval Email Sent!"

def send_email(to_email):
    sender_email = "your-email@gmail.com"
    sender_password = "your-password"
    subject = "Abstract Approved - National Seminar 2025"
    body = "Congratulations! Your abstract has been approved. See you at the seminar!"

    message = f"Subject: {subject}\n\n{body}"
    
    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, to_email, message)

if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_login import (
    LoginManager,
    UserMixin,
    current_user,
    login_required,
    login_user,
    logout_user,
)
from flask_wtf.csrf import CSRFProtect, generate_csrf

app = Flask(__name__, static_folder="public")
app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfwer80ba245'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config.update(
    DEBUG=True,
    SESSION_COOKIE_HTTPONLY=True,
    REMEMBER_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="Lax",
)
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
ma = Marshmallow(app)



login_manager = LoginManager(app)
login_manager.init_app(app)
login_manager.session_protection = "strong"

csrf = CSRFProtect(app)
cors = CORS(
    app,
    resources={r"*": {"origins": "http://localhost:8080"}},
    expose_headers=["Content-Type", "X-CSRFToken"],
    supports_credentials=True,
)

from api import routes

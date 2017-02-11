from flask import Flask

from awesome.auth import jwt
from awesome.configs import AWESOME_CONFIG
from awesome.models import db
from awesome.resources import api


def create_app():
    app = Flask(__name__)
    app.config.from_object(AWESOME_CONFIG)

    api.init_app(app)
    db.init_app(app)
    jwt.init_app(app)

    return app


app = create_app()
if app.config['ENVIRONMENT'] == 'DEVELOPMENT':
    @app.after_request
    def after_request(res):
        res.headers.add('Access-Control-Allow-Origin', '*')
        res.headers.add(
            'Access-Control-Allow-Headers', 'Content-Type,Authorization'
        )
        res.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
        res.headers.add('Access-Control-Allow-Credentials', 'true')
        return res

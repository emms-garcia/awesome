from flask import Flask, render_template

from awesome.auth import jwt
from awesome.configs import AWESOME_CONFIG
from awesome.models import db
from awesome.resources import api


def create_app():
    app = Flask(
        __name__,
        static_folder='./static/dist',
        template_folder='./templates',
    )
    app.config.from_object(AWESOME_CONFIG)

    api.init_app(app)
    db.init_app(app)
    jwt.init_app(app)

    return app


app = create_app()


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')


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

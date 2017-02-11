import datetime
import os


CURRENT_ENV = os.getenv('ENVIRONMENT', 'DEVELOPMENT')


class BaseConfig(object):
    DEBUG = False
    ENVIRONMENT = CURRENT_ENV
    JWT_AUTH_URL_RULE = '/v1/auth'
    JWT_EXPIRATION_DELTA = datetime.timedelta(days=365)
    LOG_REQUESTS = False
    SECRET_KEY = os.environ['SECRET_KEY']
    SQLALCHEMY_DATABASE_URI = os.environ['SQLALCHEMY_DATABASE_URI']
    SQLALCHEMY_TRACK_MODIFICATIONS = True


class DevelopmentConfig(BaseConfig):
    DEBUG = True
    STATIC_PATH = '/static/'


class ProductionConfig(BaseConfig):
    DEBUG = False
    STATIC_PATH = '/static/'


AWESOME_CONFIG = dict(
    DEVELOPMENT=DevelopmentConfig,
    PRODUCTION=ProductionConfig,
).get(os.environ.get('ENVIRONMENT'), DevelopmentConfig)

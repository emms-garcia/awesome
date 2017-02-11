from flask_restful import Api

from awesome.resources.users import UserIdentityResource, UserListResource
from awesome.resources.widgets import WidgetDetailResource, WidgetListResource

api = Api(prefix='/v1')

# Widgets
api.add_resource(WidgetListResource, '/widgets')
api.add_resource(WidgetDetailResource, '/widgets/<widget_id>')

# Users
api.add_resource(UserIdentityResource, '/identity')
api.add_resource(UserListResource, '/users')

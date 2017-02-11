SHELL := /bin/bash

build:
	@docker-compose build

downgrade-db:
	@docker-compose run web alembic -c alembic/alembic.ini downgrade -1

psql:
	@docker-compose run db psql -h db -U postgres

runserver:
	@docker-compose up

teardown:
	@docker ps -a -q | xargs docker stop
	@docker ps -a -q | xargs docker rm

upgrade-db:
	@docker-compose run web alembic -c alembic/alembic.ini upgrade heads

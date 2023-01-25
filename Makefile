dev: 
	docker compose -f docker-compose.dev.yml up --build
	
production:
	docker compose -f docker-compose.production.yml --env-file ./.env-example up --build
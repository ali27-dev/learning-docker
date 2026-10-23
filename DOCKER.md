docker run -d \  
 --name todos-app \
 --network todos-net \
 -e DATABASE_URL="postgres://abidali:Abid3229@todos-db:5432/docker-demo" \
 -p 3000:3000 \
todos-app:latest

<!-- Databbase-CMD -->

docker run -d \  
 --name todos-db \
 --network todos-net \
 -e POSTGRES_USER=postgres \
 -e POSTGRES_PASSWORD=Abid3229 \
 -e POSTGRES_DB=honojs \
 -p 6432:5432 \
 postgres:16-alpine

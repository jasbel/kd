cd backend
node server.js



docker build -t project-backend ./backend
docker run -p 3001:3001 project-backend


docker Frontend

docker build -t project-frontend ./frontend
docker run -p 8080:80 project-frontend

http://localhost:8080


docker-compose up --build

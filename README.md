# Virtual Zoo (backend)

## 📝 Description

This is the backend part of the Virtual Zoo app. It's written in Nestjs. It has a frontend part which at this repository:
https://github.com/kristjanv001/virtual-zoo-frontend


## 💻 How to set up?

0. Make sure Nodejs (version >= 16), npm and Docker Compose are installed.

1. Download the project and run the commands from the terminal while in this project's directory:
- `docker-compose up -d` (macos) or `docker compose up` (ubuntu)
- `npm install`
- `npm run start`

2. This Nestjs app (port 3000) and a PostgreSQL Docker container (port 5432) should be now running.

3. Use Postman to make requests (e.g., to localhost:3000/holograms) or set up the frontend part to make requests via it.

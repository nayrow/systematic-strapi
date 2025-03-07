# Dockerized Strapi Application

This is a production-ready Docker setup for the Strapi application.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Configuration

Before building and running the Docker container, you should set the proper environment variables. These are defined in the `docker-compose.yml` file. For security reasons, you should change the default values for the following environment variables:

- `APP_KEYS`
- `API_TOKEN_SALT`
- `ADMIN_JWT_SECRET`
- `TRANSFER_TOKEN_SALT`
- `JWT_SECRET`

## Building and Running

To build and start the Docker container, run:

```bash
docker-compose up -d
```

This will:
1. Build the Docker image based on the Dockerfile
2. Start the Strapi application on port 1696
3. Create persistent volumes for uploads and the database

## Accessing the Application

Once the container is running, you can access the Strapi application at:

```
http://localhost:1696
```

And the admin panel at:

```
http://localhost:1696/admin
```

## Stopping the Application

To stop the Docker container, run:

```bash
docker-compose down
```

## Logs

To view the logs of the running container, run:

```bash
docker-compose logs -f
```

## Updating the Application

When you need to update the application, follow these steps:

1. Stop the container: `docker-compose down`
2. Pull the latest code changes
3. Rebuild the Docker image: `docker-compose build`
4. Start the container again: `docker-compose up -d`

## Volumes

The Docker setup creates two persistent volumes:
- `./public/uploads:/app/public/uploads` - For uploaded files
- `./database:/app/database` - For the SQLite database

This ensures that your data is preserved even if the container is removed. 
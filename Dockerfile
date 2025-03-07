FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install global dependencies and build tools
RUN apk add --no-cache build-base gcc autoconf automake python3 git

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --production

# Copy application files
COPY . .

# Build the Strapi application
RUN npm run build

# Set environment variables
ENV NODE_ENV=production
ENV PORT=1696
ENV HOST=0.0.0.0

# Expose the application port
EXPOSE 1696

# Start the application
CMD ["npm", "start"] 
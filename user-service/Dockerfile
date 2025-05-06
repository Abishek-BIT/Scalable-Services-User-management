# Use official Node.js LTS base image
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port (use the same port your Express app listens on)
EXPOSE 5000

# Define environment variable file
ENV NODE_ENV=production

# Start the application
CMD ["node", "src/app.js"]

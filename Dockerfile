# Use an official Node runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Install TypeScript globally
RUN npm install -g typescript

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Compile TypeScript to JavaScript
RUN tsc

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV NODE_ENV=production

# Run the app when the container launches
CMD ["node", "dist/server.js"]
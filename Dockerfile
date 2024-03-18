# Use an official Node runtime as a parent image
FROM node:14

# Set environment variables
ENV REACT_APP_API_URL http://backend:8000

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Copy the package-lock.json and node_modules
# COPY package-lock.json /app
# COPY node_modules /app/node_modules

# Install dependencies
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define the command to run on startup
CMD ["npm", "start"]

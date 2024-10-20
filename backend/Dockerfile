# Use the official Node.js image
FROM node:18

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the backend port
EXPOSE 5000

# Command to run the backend server
CMD ["node", "index.js"]

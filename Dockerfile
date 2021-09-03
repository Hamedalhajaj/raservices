# pull official base image
FROM node:14

# set working directory
WORKDIR /app

# Copy all contents of the current directory
COPY . .

# Install dependencies
RUN yarn install && yarn global add serve 

# Create a build
RUN npm run build

# Serve the app
CMD ["serve", "-s", "build", "-l", "80"]


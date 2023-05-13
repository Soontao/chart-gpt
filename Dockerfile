# Build stage
FROM node:lts AS build

# Set the working directory to /app
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

ENV NEXT_TELEMETRY_DISABLED=false

# Build the Next.js app
RUN yarn build

# Production stage
FROM node:lts-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package*.json yarn.lock ./

# Copy the built app from the previous stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

# Expose port 3000
EXPOSE 3000

# Start the Next.js app
CMD ["node", ".next/standalone/server.js"]

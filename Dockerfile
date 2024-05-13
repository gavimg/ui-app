#Stage 1
#Download Node image
FROM node:18.13.0 as node

#Setup the working directory
WORKDIR /ui-app

#Copy package.json
COPY package.json package-lock.json ./

#Install dependencies
RUN npm install

#Copy other files and folder to working directory
COPY . .

#Build Angular application in PROD mode
RUN npm run build --prod

#Stage 2
#Download NGINX Image
FROM nginx:alpine

#Copy built angular app files to NGINX HTML folder
COPY --from=node  /ui-app/dist/ui-app /usr/share/nginx/html

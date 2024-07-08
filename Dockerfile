FROM node:20
WORKDIR /app
COPY package.json ./
RUN npm install
# copy my code
COPY . .
#run the app
RUN npm run build
#Nginx images to serve our app
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx
#http only travels to 80 port
EXPOSE 80 
#cmd to run out engine
CMD ["nginx","-g","daemon off;"]
#CMD ["npm","start"]



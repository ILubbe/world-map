FROM node:20-alpine

COPY world-map/ /world-map/

WORKDIR /world-map

RUN npm install && \
    npm install -g @angular/cli && \
    ng analytics off

EXPOSE 4200

#ENTRYPOINT ["ng", "serve"] # <-- This one limits to only listen on localhost:4200

ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0"] # <-- This one listens on PUBLIC-IP:4200

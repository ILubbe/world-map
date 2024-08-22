## world-map
#Interactive world map written with Angular framework

#To Run, Build the container with the provided Containerfile and run the container.

For example: (Docker works too)

podman build . -t angular-world-map:latest

podman run --name world-map -d --rm -p 4200:4200 angular-world-map:latest

#To kill:

podman stop world-map

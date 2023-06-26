SHELL := /bin/bash
CI_PROJECT_NAMESPACE="marketplace"
CI_DOCKER_IMAGE=registry.ugaming.io/marketplace/packages
# build images from all services
.PHONY: build-image-local
build-image-local: build-linux
	docker build --platform linux/amd64 -f build/local.Dockerfile -t ${CI_DOCKER_IMAGE}/${service}:${tag} . --build-arg service=${service} --build-arg BOT_USER=${BOT_USER} --build-arg BOT_PRIVATE_TOKEN=${BOT_PRIVATE_TOKEN} --build-arg CI_PROJECT_NAMESPACE=${CI_PROJECT_NAMESPACE}
test:
	echo "Test success"

.PHONY: download-go-mod
download-go-mod: go.mod
	go mod download all

.PHONY: build-linux
build-linux: download-go-mod
	GOOS=linux GOARCH=amd64 go build -mod=readonly -o out/cmd/main cmd/main.go

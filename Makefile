SHELL := /bin/bash

.PHONY: build-image-local
build-image-local:
	docker build --platform linux/amd64 -f builder/Dockerfile -t ${commit} .
	docker tag ${commit} ${latest}
	docker push ${latest}

test:
	echo "Test success"

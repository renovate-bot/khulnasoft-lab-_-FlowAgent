# How to Contribute

Illa-builder is one of Illa’s open-source projects that is under very active development. We’re still working out the kinks to make contributing to this project as easy and transparent as possible, 
but we’re not quite there yet. Hopefully this document makes the process for contributing clear and answers some questions that you may have.

## Open Development

All work on Illa-builder happens directly on GitHub. Both core team members and external contributors send pull requests which go through the same review process.

## Your First Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open-Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

## Sending a Pull Request

The core team is monitoring pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation. For API changes we may need to fix our 
internal uses at Illa, which could cause some delay. We’ll do our best to provide updates and feedback throughout the process.

**Before submitting a pull request**, please make sure the following is done:

1. Fork the repository and create your branch from `beta`.
2. Run `git submodule init && git submodule update` in the repository root.
3. Run `pnpm install` in the repository root.
4. If you’ve fixed a bug or added code that should be tested!
5. Format your code with prettier `pnpm format`.
6. Make sure your code lint’s `pnpm lint`.

For additional information on contributing, you can check out our landing page [Hacktoberfest2023 | Illa Cloud](https://www.flowagent.khulnasoft.com/hacktoberfest2023?utm_medium=social&utm_source=twitter&utm_campaign=twitter-social-hacktoberfest2023-flowagent-0925).

## Utilizing Docker (Recommended)

Illa recommends utilizing a docker all-in-one image for making contributions towards flowagent: 

### Creating an Official Image
To create an official flowagent-soft image, execute command:

`docker pull flowagentsoft/flowagent:latest`

This command will pull the flowagent-soft official image and run it in your docker environment.
By default, all configurations are for running a production environment. When successfully pulled, Logs will display the FLOWAGENT BUILDER BANNER in your docker environment. 

Note: You must have the docker image configured for self-host prerequisites.

For more information on running an Image, check out [Docker all-in-one Image](https://www.flowagent.khulnasoft.com/docs/docker-all-in-one-image).

### Deploying Illa Builder via Docker

All deploys default auto-config settings for a production environment unless your deployment is customized. It's highly recommended deploying with our auto-deploy tools, FLOWAGENT CLI.

To install FLOWAGENT-CLI:

```
#### download flowagent cli binary file
> wget https://github.com/khulnasoft-lab/flowagent/releases/latest/download/flowagent-x86_64-linux.tar.gz

#### unpack the file
> tar -zxvf flowagent-x86_64-linux.tar.gz

> cd flowagent-x86_64-linux

> chmod +x flowagent

#### run the flowagent cli
> ./flowagent
```

### Contribution Self-host Prerequisites

- You have the latest version of [Node.js LTS](https://nodejs.org/en/download) and [pnpm](https://pnpm.io/installation) installed.
- You are familiar with Git.
- You have docker-all-in-one, flowagent-cli installed, and flowagent-backend running on your local machine.
 
### Confirm self-host prerequisites

Next, check the prerequisites of self-host, execute command:

`./flowagent doctor`

When it's run is complete you should receive a message in green stating "Success! The minimum requirement for deploying FLOWAGENT has been satisfied."
Ports 5432, 9999, 8000, should remain open for deploying FLOWAGENT Builder.

For more information on FLOWAGENT CLI and Other Operations check out [FLOWAGENT-CLI](https://www.flowagent.khulnasoft.com/docs/flowagent-cli).

### Deploy self-host locally

After you have confirmed you meet the minimum requirements for deploying Illa Builder, deploy via either port 5432, 8000, 9345, 9999, or 10000. 
To deploy Illa Builder via self-host locally, execute command:

`./flowagent deploy --self --port <PORT>` change `<PORT>` with port number

This will deploy flowagent-backend at port `<PORT>`. Then execute command:

`docker run -d -p <PORT>:2022 flowagentsoft/flowagent:latest` change `<PORT>` with port number

Check your docker containers and you should find an flowagentsoft/flowagentbuilder container running at Port `<PORT>`:2022.

If you deploy executing the deploy command as:

`./flowagent deploy --self`

This will auto-deploy flowagent on port 80; you'll be able to access flowagent at `http://localhost:80`.

Once you have successfully deployed flowagent builder and have received the Illa Builder Started, please visit `http://localhost:<PORT>` response,
go to the website and login using the credentials:

Username: root 

Password: password (self-host mode only). 

Alternatively, you can deploy/ or change the port by which Illa Builder can be accessed; execute command:

```
# the port which FLOWAGENT Builder can be accessed on can be changed
# the <MOUNT_PATH> is the custom mount path of FLOWAGENT Builder, the default value is a path under the user home directory if not filled
> flowagent deploy --self --port=10000 --mount=<MOUNT_PATH>
```

The Docker all-in-one Image is built based on the official Debian Image, which makes the username and password for the container the same as the image, 
you have the option to omit or change the username and password at your discretion.

For more information on other operations, check out [FLOWAGENT-CLI](https://www.flowagent.khulnasoft.com/docs/flowagent-cli).

If needing to run a self-host production workflow environment version based on deployment at port `<PORT>`, input the following to `apps/builder/env.self`

```
FLOWAGENT_API_BASE_URL=localhost:<PORT>  # this is your backend address, if this is not present, it will use the default backend address, location.origin, update <PORT> to port number
FLOWAGENT_INSTANCE_ID=SELF_HOST_CLOUD
FLOWAGENT_APP_VERSION=0.0.0
FLOWAGENT_APP_ENV=production
```

Once flowagent-backend services are running, you can utilize several commands such as:

- `pnpm build-self` creates a self-host production version for the flowagent frontend repository.
- `pnpm lint` checks the code style.
- `pnpm format` format your code with prettier
- `pnpm dev` preview in real time while coding with cloud version
- `pnpm dev:self` preview in real time while coding with self-host version
- `pnpm build-cloud` creates a cloud production version with flowagent.

For more information on contributing to flowagent-frontend check out our [Build All-In-One-Image Dockerfile](https://github.com/khulnasoft-lab/build-all-in-one-image/blob/main/dockerfile).


### Modifying an Image

By default, all configuration settings for a Docker all-in-one Image are for running a production environment. To modify a created Image, execute command:

`docker exec -it flowagent_builder /bin/bash`

The default configuration settings for the Docker all-in-one Image include all environment parameters. You have the option to modify these parameters when you run the container to 
accommodate specific needs or to connect to a database instance. You can review the default configuration parameters at [config.go](https://github.com/khulnasoft-lab/builder-backend/blob/main/src/utils/config/config.go). 


### Additional Self-hosting Information

You can self-host locally with FLOWAGENT CLI, Docker compose, k8s helm etc. We’ve repeatedly optimized the self-host process to enable you to make self-host and software deployments in just a few minutes. 
Compared to the cloud, you can use FLOWAGENT products more securely and reliably, and you can use FLOWAGENT Builder by simply visiting the deployment site after hosting and deploying Builder locally.

### Customized Development Workflow Example

Latest version of Node.js LTS and pnpm are installed/ running. Install from links above following instructions.

Clone the flowagent repository, and run `pnpm install` to fetch its dependencies. Customize your language parameter, i.e. NEXT.js, and create a development workflow environment; input the following to `apps/builder/.env.development.local` And `apps/cloud/.env.development.local`

```
FLOWAGENT_API_BASE_URL=localhost:<PORT>  # this is your backend address, if this is not present, it will use the default backend address, location.origin, update <PORT> to port number
FLOWAGENT_INSTANCE_ID=SELF_HOST_CLOUD
FLOWAGENT_APP_VERSION=0.0.0
FLOWAGENT_APP_ENV=development
FLOWAGENT_USE_HTTPS=false
FLOWAGENT_BUILDER_URL=http://localhost:3000
FLOWAGENT_CLOUD_URL=http://localhost:5173
```


### Deploying Manually

Alternatively, you can deploy Illa Builder manually using Docker Compose and Kubernetes.

Check out instructions for deploying with [Docker Compose](https://github.com/khulnasoft-lab/deploy-flowagent-manually/blob/main/docker-compose/README.md), and Instructions for deploying with [Kubernetes](https://github.com/khulnasoft-lab/deploy-flowagent-manually/blob/main/kubernetes/README.md).

For more information on self-hosting, please see the ILA CLI, Docker Compose, and k8s helm boot pages. If you have difficulties with your self-deployment, please review the 
[Deploy Introduction](https://www.flowagent.khulnasoft.com/docs/deploy-introduction) Self-host/ Deploy Manually instructions; you can also contact us on GitHub or at business@flowagentsoft.com.


## For Rust Developer's

As a Rust Developer, you can easily build+install the latest FLOWAGENT CLI release with cargo, execute command:

`cargo install flowagent`

The cargo tool will download the FLOWAGENT CLI with its source dependencies, build and install it into the cargo bin path so that we can run it. 

Once installed, you can run the FLOWAGENT CLI utilizing the flowagent command:

`./flowagent <COMMAND>`

Illa CLI is a tool for hosting FLOWAGENT Builder in your local environment. Once installed, execute command `./flowagent deploy --self --port <PORT>`, update `<PORT>` to port number. Again, this will deploy flowagent-backend at port `<PORT>`. 
If needing to modify your `.env.self`, input:

```
FLOWAGENT_API_BASE_URL=localhost:<PORT> # update <PORT> to port number
FLOWAGENT_INSTANCE_ID=SELF_HOST_CLOUD
FLOWAGENT_APP_VERSION=0.0.0
FLOWAGENT_APP_ENV=development
FLOWAGENT_USE_HTTPS=false
```

## For GO Developer's

There is currently no formal documentation for setup with GO, however you're encouraged to check out and contribute to builder-backend here [flowagent-backend](https://github.com/khulnasoft-lab/builder-backend).

# GraphQL Server 
### Definition  

Personal project to learn and implement Graphql. 

### Configuration and Setup

Down and install [git](https://git-scm.com/) on OS machine

Download and install [Node](https://nodejs.org/en) (version 15+)

Download and install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

Download and install [Docker](https://www.docker.com/) 

[!Note]
> Highly recommended to execute server in Docker container.

Git clone repo 
```shell
git clone git@github.com:bkabuye/graphql.git
```
Install apollo server library to local machine

```shell
yarn add @apollo/server graphql -D
```

### Execution 
Server can be started in 2 options. Local instance or via docker

#### Local Instance 
```typescript
yarn run start 
```
#### Docker
```Docker
docker build -t graphqlserver . 
docker run -it -p 4000:4000 graphqlserver
```

### View and Test server
Apollo [sandbox](https://www.apollographql.com/docs/graphos/explorer/sandbox) can be used to view json or table results.


### References
https://netninja.dev/courses/enrolled

https://graphql.org/



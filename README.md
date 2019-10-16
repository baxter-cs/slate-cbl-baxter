# slate-cbl-baxter

## Development Quickstart

From [`emergence-book/development/getting_started.html`](http://emergenceplatform.github.io/book/development/getting_started.html)

```bash
HAB_DOCKER_OPTS="-p 7080:7080 -p 3306:3306 --name baxter-studio" \
    hab studio enter -D
```

Once at the studio's shell:

```bash
build /src
start-all
```

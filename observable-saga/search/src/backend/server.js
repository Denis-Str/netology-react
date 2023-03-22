const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();

app.use(cors());
app.use(koaBody({json: true}));

let nextId = 1;
const skills = [
  { id: nextId++, name: "React" },
  { id: nextId++, name: "Redux" },
  { id: nextId++, name: "Redux Thunk" },
  { id: nextId++, name: "RxJS" },
  { id: nextId++, name: "Redux Observable" },
  { id: nextId++, name: "Redux Saga" },
];

const router = new Router();
let isEven = true;

router.get("/api/search", async (ctx) => {
  if (Math.random() > 0.75) return ctx.response.status = 500;

  const { q } = ctx.request.query;

  return new Promise( (resolve) => {
    setTimeout(() => {
        ctx.response.body = skills.filter((o) =>
          o.name.toLowerCase().startsWith(q.toLowerCase())
        );
        resolve();
      },
      isEven ? 1000 : 5 * 1000
    );
    isEven = !isEven;
  });
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7777;
const server = http.createServer(app.callback());
server.listen(port, () => {
  console.log(`server started http://localhost:${port}`)
});

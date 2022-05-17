# Load test client for CLYS-85

https://lucidsight.atlassian.net/browse/CLYS-85



1. Make sure Colyseus processes/proxy are running.

2. Install dependencies,

```bash
npm install
```

3. And run,

```bash
colyseus-loadtest loadtest.ts --endpoint ws://{PROXY_HOST}:{PROXY_PORT} --room {MY_ROOM} --numClients 10000 
```

For integrated example,

```bash
colyseus-loadtest loadtest.ts --endpoint ws://localhost:3000 --room my_room --numClients 10000 
```



## License

MIT

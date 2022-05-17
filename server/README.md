# Test server for CLYS-85

https://lucidsight.atlassian.net/browse/CLYS-85



How To

1. Make sure that you have a running local Redis instance or else please configure it in `src/arena.config.ts`.

2. Install dependencies.
   ```bash
   npm install
   ```

3. Start pm2.
   ```bash
   pm2 start && pm2 logs
   ```

4. Set `PORT` env variable for proxy.
   ```bash
   export PORT=3000
   ```

5. Start proxy.
   ```bash
   colyseus-proxy
   ```




## License

MIT

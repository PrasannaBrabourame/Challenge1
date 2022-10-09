nohup node server.js > /dev/null 2>&1 &
sleep 2
pid=$!
echo server started at pid $pid
npm run rollback
npm run migrate
npm run test
npm run rollback
kill $pid
echo server stopped.





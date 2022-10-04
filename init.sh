nohup node server.js > /dev/null 2>&1 &
sleep 2
pid=$!
kill $pid

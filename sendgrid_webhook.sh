function localtunnel {
  lt -s gablorkablork45h5 --port 5000;
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done

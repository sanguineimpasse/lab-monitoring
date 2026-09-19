import time

import tomli

# read our configs first because
with open("config.toml", "rb") as f:
    config = tomli.load(f)

SERVER_URL = f'http://{config["SERVER_ADDRESS"]}:{config["PORT"]}/api/report'
HEARTBEAT_INTERVAL = config["HEARTBEAT_INTERVAL"]

def main():
    while True:
        print(f"the heart beats {HEARTBEAT_INTERVAL}")
        time.sleep(HEARTBEAT_INTERVAL)

main()

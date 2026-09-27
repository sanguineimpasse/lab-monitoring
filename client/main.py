import time
import platform
# external dependencies
import tomli

# local units
import sysmon

# read our configs first because
with open("config.toml", "rb") as f:
    config = tomli.load(f)

SERVER_URL = f'http://{config["SERVER_ADDRESS"]}:{config["PORT"]}/api/report'
HEARTBEAT_INTERVAL = config["HEARTBEAT_INTERVAL"]
HOSTNAME = platform.node()

def startup_functions():
    # incase we need to run something ONCE during startup
    pass

def startup_message():
    print("-----------------------------------------------")
    print("STARTING CLIENT...")
    print(f"Computer '{HOSTNAME}' connected")
    print(f"{platform.system()} {platform.release()} {platform.version()}")
    print("-----------------------------------------------")
    print(f"\nReporting started (interval - [{HEARTBEAT_INTERVAL}] seconds):")

def main():
    startup_message()
    startup_functions()

    while True:
        system_resources = sysmon.get_system_resources()
        print(system_resources)

        print(f"the heart beats {HEARTBEAT_INTERVAL}")
        time.sleep(HEARTBEAT_INTERVAL)

main()

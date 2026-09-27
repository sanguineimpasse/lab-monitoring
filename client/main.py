import time
import platform
import json
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


def startup_message():
    print("-----------------------------------------------")
    print("STARTING CLIENT...")
    print(f"Computer '{HOSTNAME}' connected")
    print(f"{platform.system()} {platform.release()} {platform.version()}")
    print("-----------------------------------------------")
    print(f"\nReporting started (interval - [{HEARTBEAT_INTERVAL}] seconds):")

def startup_functions():
    startup_message()
    # incase we need to run something ONCE during startup

def main():
    startup_functions()

    while True:
        system_resources = sysmon.get_system_resources()
        input_devices = sysmon.get_input_devices() # polling devices every interval might be a bit too expensive, consider another way to do this

        payload = {
            "hostname": HOSTNAME,
            "system_resources":system_resources,
            "input_devices": input_devices
        }

        # debug printout
        print(json.dumps(payload, indent=2))

        print(f"the heart beats ({HEARTBEAT_INTERVAL})")
        time.sleep(HEARTBEAT_INTERVAL)

main()

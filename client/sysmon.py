#-----------------------------------------------------
# SYSMON.PY
#-----------------------------------------------------
# this script provides all the functions for system monitoring in the client
#
#

import psutil

# get system vitals -- ensure it's breathes normally
## currently tracks CPU,MEM,STORAGE,BATT, and UPTIME
def get_system_resources():
    cpu = {
        "usage_percent": psutil.cpu_percent(interval=0.5)
    }

    memory = psutil.virtual_memory()
    ram = {
        "used_bytes": memory.used,
        "available_bytes": memory.available
    }

    storage = {}
    for partition in psutil.disk_partitions():
        # skip things that aren't actual local disks
        if "cdrom" in partition.opts:
            continue

        try:
            usage = psutil.disk_usage(partition.mountpoint)

            storage[partition.mountpoint] = {
                "total_bytes": usage.total,
                "used_bytes": usage.used,
                "free_bytes": usage.free,
                "usage_percent": usage.percent,
            }
        except PermissionError:
            continue

    battery_info = psutil.sensors_battery()
    if battery_info is not None:
        battery = {
            "percent": battery_info.percent,
            "plugged_in": battery_info.power_plugged,
            "seconds_left": (
                None
                if battery_info.secsleft == psutil.POWER_TIME_UNLIMITED
                else battery_info.secsleft
            ),
        }
    else:
        battery = None

    uptime = psutil.time.time() - psutil.boot_time()

    return {
        "cpu": cpu,
        "ram": ram,
        "storage": storage,
        "battery": battery,
        "uptime": uptime
    }

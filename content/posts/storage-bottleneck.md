---
title: "Diagnosing Storage Bottlenecks in the Homelab"
date: "2025-12-15"
description: "How I realized my Docker containers were choking on network latency and moved them to local NVMe."
---

Recently, I noticed some sluggish performance in my self-hosted services, particularly with my Nextcloud and Jellyfin instances.

## The Symptoms

- Slow page loads
- High I/O wait times shown in `htop`
- General unresponsiveness during backups

## The Investigation

I started by checking the Proxmox metrics. My CPU usage was low, RAM was fine, but the IO delay was spiking consistently.

My setup at the time:
- Proxmox running on a Dell Optiplex
- VM storage on local SATA SSD
- **Docker data** mounted via NFS from my Unraid NAS

I thought keeping state on the NAS was smart for redundancy, but I hadn't accounted for the network overhead and the random I/O patterns of databases (MariaDB, SQLite) running in those containers.

## The Fix

I migrated the persistent volumes for my high-IO containers (databases, search indices) to a local NVMe drive passed through to the VM.

```bash
# Example docker-compose volume change
volumes:
  - /mnt/fast_nvme/app_data:/config
```

The difference was night and day. Services that took seconds to load now load instantly. I still use the NAS for bulk media storage and nightly backups, but active data lives on fast local storage now.

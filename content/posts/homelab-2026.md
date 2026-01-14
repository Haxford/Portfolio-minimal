---
title: "My Homelab Setup (2026)"
date: "2026-01-14"
description: "A look at my current infrastructure: Proxmox compute nodes, Unraid storage, and UniFi networking."
---

Here is a breakdown of the current hardware powering my home infrastructure. I'm currently in the process of upgrading the networking stack and expanding my compute capacity.

## Compute Cluster

- **Beelink SER5** (Proxmox Host #1)
  - Primary compute node for active services.
- **Zimaboard 2** (Planned - Proxmox Host #2)
  - Future addition to establish a high-availability cluster.

## Storage

- **Terramaster NAS** running **Unraid**
  - Bulk storage for backups, media, and archives.

## Networking

- **UniFi Cloud Gateway Ultra**
  - Primary router and gateway.
- **Netgear Switch**
  - Currently serving as the core switch, with plans to replace it with UniFi hardware for full integration into the controller.

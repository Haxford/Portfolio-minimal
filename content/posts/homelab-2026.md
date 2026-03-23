---
title: "My Homelab Setup (2026)"
date: "2026-01-14"
description: "The gaming PC is now my Proxmox host, the Beelink is a Linux sandbox, and the homelab is quietly serving the media stack."
---

My homelab has evolved since the last update. Here's where things stand.

## Compute

The main Proxmox host is now a **gaming PC** — it was gathering dust so I put it to work:

- **CPU:** Ryzen 7 7800X3D
- **GPU:** RTX 5080
- **OS:** Proxmox VE 9.2

The gaming hardware is overkill for homelab work, but it was sitting there and it runs Proxmox perfectly fine. Once the 5080 GPU shortage eases I'll probably grab something cheaper for compute-only tasks.

The **Beelink SER5** is now running **Omarchy** — my Linux sandbox for anything that needs a quick terminal environment without touching the main cluster.

Still have the **Zimaboard 2 1661** on standby for future projects.

## Storage

- **Terramaster NAS** running **Unraid**
  - Bulk storage, media, backups.

## Services

Currently running the media stack. More services planned.

**Planned:**
- **Immich** — self-hosted Google Photos alternative
- **Home Assistant** — smart home automation for my mum's voice assistant idea ("turn the WiFi off until homework is done")
- **PaperNGX** — replace disorganised personal file folders with a proper document management system. Tags, categories, searchable.

Networking stack is still UniFi Cloud Gateway Ultra + Netgear switch for now, with plans to move fully to UniFi hardware when the budget allows.

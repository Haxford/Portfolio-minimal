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

The **Beelink SER5** is now running **OpenMediaVault** — my Linux sandbox for anything that needs a quick terminal environment without touching the main cluster.

Still have the **Zimaboard 2 1661** on standby for future projects.

## Storage

- **Terramaster NAS** running **Unraid**
  - Bulk storage, media, backups.

## Media Stack

Currently running the media stack on Proxmox. I won't go into specifics publicly — let's just say it's the usual suspects for self-hosted media.

## What's Next

**Home Assistant** is on the list. The use case is for my mum — she wants something like a voice assistant that can do things like "hello [device], turn the WiFi off until homework is done." That's a fun automation challenge to work on.

**PaperNGX** is also on the list — I want to replace my disorganised personal file folders with a proper document management system. Tags, categories, searchable — sort out the chaos.

Networking stack is still UniFi Cloud Gateway Ultra + Netgear switch for now, with plans to move fully to UniFi hardware when the budget allows.

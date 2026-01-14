---
title: "The Logic Behind My NAS Strategy"
date: "2025-12-28"
description: "Why I chose Unraid, separated compute from storage, and my long-term plan for a 20+ year media archive."
---

Building a homelab is often a balancing act between "cool tech" and "practical utility." For my storage needs, I decided to take a pragmatic, long-term approach.

## The Goal

I needed a system that could serve as a reliable media archive for movies, TV shows, and music, accessible to the entire family. The key requirements were:
-   **Low Maintenance:** I don't want to spend my weekends fixing a broken array.
-   **Flexibility:** The ability to add mismatched drives as my budget allows.
-   **Longevity:** A system that can scale for the next 10-20 years.

## The Setup: Unraid

I chose **Unraid** over TrueNAS or a standard RAID setup for one main reason: **Flexibility.**

With Unraid, I can mix and match drive sizes. I can start with a 4TB and an 8TB drive, and add a 12TB drive later without rebuilding the entire array. This "grow as you go" approach is perfect for a home environment where budgets fluctuate.

## Separation of Concerns

A key architectural decision was to separate **Compute** from **Storage**.

-   **Compute:** My Beelink SER5 runs Proxmox and handles all the active workloads (VMs, Docker containers, game servers).
-   **Storage:** The Terramaster NAS (running Unraid) does one thing and does it well: it stores files.

This separation means I can reboot my Proxmox host to test a new kernel without taking down the family media library. It also means the NAS CPU can be low-power and efficient, as it doesn't need to transcode video or compile code.

## The "No Parity" (Initial) Philosophy

Controversially, I started without a parity drive. Why?

1.  **Data Criticality:** My media library is replaceable. If a drive dies, I lose some movies, not family photos (which are backed up to the cloud).
2.  **Cost:** Parity requires your largest drive to be "wasted" on protection. In the early stages, I prioritized usable capacity.

As the array grows to 30-40TB, I plan to add a parity drive to save the hassle of re-ripping media, but for now, raw storage is king.

## Looking Ahead

This setup is designed to be boring. Ideally, I won't think about it at all. It just sits there, quietly serving files, ready to accept a new hard drive whenever I find a good deal.

---
title: "My Neovim Journey (So Far)"
date: "2025-11-20"
description: "From VS Code to Neovim to Zed — where I am now as a beginner learning to code."
---

I got into Neovim after watching [The Primeagen](https://www.youtube.com/@ThePrimeagen) fly through code without touching his mouse. It looked fast. It looked intentional. I wanted some of that.

## Why I Switched

I wanted to become better at programming, not just writing code. I felt that modern IDEs, while powerful, were a "black box." Everything is pre-packaged, abstracted away, and "magic."

I wanted a blank slate. I wanted an environment I had to build, understand, and configure myself.

## The Learning Curve

I'll be honest — the first week was painful. My muscle memory fought me every step of the way. `hjkl` for navigation felt completely alien.

But I forced myself to stick with it. I uninstalled VS Code to remove the safety net.

## My Configuration

I'm running [Kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim) by [TJ DeVries](https://www.youtube.com/@teej_dv). It's the perfect middle ground — a solid working editor out of the box, but the configuration is small and well-commented enough that you can actually read and understand it. It's not a distribution like LazyVim that hides the details; it's a starting point for your own journey.

Key plugins I rely on:
- **Telescope** — fuzzy finding files
- **Harpoon** — quick file switching
- **Treesitter** — better syntax highlighting
- **LSP Zero** — easy LSP setup

## Where I Am Now

I'll be honest — I didn't stick with Neovim as my main editor. After a few weeks I moved to Zed as my primary editor. Here's why:

Zed has AI built in, removes the friction of learning a new workflow while also learning to code, and honestly removes a lot of the learning curve that would have slowed me down. I use it to write actual code and to figure out how to use AI effectively while I'm at it.

So what do I actually know in Neovim? Basic movements, a few shortcuts, and the modes. That's it. Enough to get by when I need to edit a config file in the terminal or make a quick change without switching context.

## What I Still Use Neovim For

Honestly, mostly config files. `~/.config/nvim/`, Docker Compose files, quick edits on a remote server. The muscle memory for `:wq` and `/search` is useful even if I'm not doing serious development in it.

## The Honest Take

I think the Neovim journey was worth it even if I don't use it as my main editor. I learned more about how editors actually work, I got comfortable navigating a terminal, and I understand the philosophy behind modal editing even if I'm not flying around in it.

Would I go back? Maybe. But for now Zed does what I need, and I can always drop into Neovim when the situation calls for it.

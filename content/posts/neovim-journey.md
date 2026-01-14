---
title: "Moving from VS Code to Neovim"
date: "2025-11-20"
description: "Why I ditched the mouse and embraced modal editing for my daily workflow."
---

It started as a curiosity. I watched The Primeagen flying through code without touching his mouse, and I was hooked. It wasn't just about speed—it was about mastery.

## Why I Switched

I wanted to become better at programming, not just writing code. I felt that modern IDEs, while powerful, were a "black box." Everything is pre-packaged, abstracted away, and "magic."

I wanted a blank slate. I wanted an environment that I had to build, understand, and configure myself. I knew that forcing myself to understand my tools would push me to understand the underlying systems better.

## The Learning Curve

I won't lie—the first week was painful. My muscle memory fought me every step of the way. `hjkl` for navigation felt alien.

But I forced myself to stick with it. I uninstalled VS Code (temporarily) to remove the safety net.

## My Configuration

I'm currently running [Kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim) by TJ DeVries. It's the perfect middle ground—it gives you a solid, working editor out of the box, but the configuration is small and well-commented enough that you can actually read and understand it. It's not a distribution like LazyVim that hides the details; it's a starting point for your own journey.

Key plugins I rely on:
- **Telescope**: For fuzzy finding files
- **Harpoon**: For quick file switching
- **Treesitter**: For better syntax highlighting
- **LSP Zero**: For easy LSP setup

## Why stick with it?

1.  **Speed**: Once the commands clicked, editing text became faster than thinking about it.
2.  **Remote editing**: SSHing into a server and having my full editor environment is a game changer.
3.  **Resources**: Neovim uses a fraction of the RAM that VS Code does.

It's not for everyone, but for me, it's made coding fun again. It turned a chore into a craft.

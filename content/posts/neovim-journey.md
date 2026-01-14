---
title: "Moving from VS Code to Neovim"
date: "2025-11-20"
description: "Why I ditched the mouse and embraced modal editing for my daily workflow."
---

It started as a curiosity. I watched a few YouTube videos of people flying through code without touching their mouse, and I was hooked.

## The Learning Curve

I won't lie—the first week was painful. My muscle memory fought me every step of the way. `hjkl` for navigation felt alien.

But I forced myself to stick with it. I uninstalled VS Code (temporarily) to remove the safety net.

## My Configuration

I started with [Kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim), which gave me a solid foundation without being a "black box" distribution like LazyVim.

Key plugins I rely on:
- **Telescope**: For fuzzy finding files
- **Harpoon**: For quick file switching
- **Treesitter**: For better syntax highlighting
- **LSP Zero**: For easy LSP setup

## Why stick with it?

1.  **Speed**: Once the commands clicked, editing text became faster than thinking about it.
2.  **Remote editing**: SSHing into a server and having my full editor environment is a game changer.
3.  **Resources**: Neovim uses a fraction of the RAM that VS Code does.

It's not for everyone, but for me, it's made coding fun again.

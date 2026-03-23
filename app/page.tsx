import Link from 'next/link';
import { ExternalLink, Server, Terminal, Network, ShieldCheck, Search, Bot, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* HEADER */}
      <section className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Harry Axford</h1>
        <p className="text-xl md:text-2xl text-neutral-400 font-light">
          IT Technician <span className="text-neutral-600 px-2">→</span> 
          Linux Sysadmin <span className="text-neutral-600 px-2">→</span> 
          Cloud Engineer
        </p>
      </section>

      {/* OPEN TO WORK */}
      <section>
        <div className="border border-green-500/30 bg-green-500/10 rounded-lg px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-300 font-semibold text-sm uppercase tracking-wide">Open to Work</span>
          </div>
          <p className="text-neutral-300 text-sm">
            IT Engineer · Junior DevOps · Cloud Support · Systems Administrator
            <span className="text-neutral-500 ml-2">· London, UK</span>
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">About</h2>
        <p className="text-neutral-300 leading-relaxed max-w-2xl">
          IT Technician with 3 years supporting multi-site educational environments across the Croydon area. Primary contact for two academies within a seven-school cluster — independent ownership of day-to-day operations and infrastructure.
          <span className="block mt-4 text-neutral-300">
            Specializing in Microsoft Intune, Apple device management (Jamf → Intune migration), and M365 administration. Comfortable with Azure, Cisco Meraki networking, and on-premises server infrastructure.
          </span>
          <span className="block mt-4 text-neutral-300">
            When documentation didn&apos;t exist, I built a cluster-wide knowledge base from scratch — documenting IPs, VLANs, device configs, and site processes. It&apos;s now maintained by the whole team.
          </span>
          <span className="block mt-4 text-neutral-400">
            Daily driver: <span className="text-white">Linux + Neovim</span>.
            Also running MacOS — because sometimes you just need a Mac.
          </span>
        </p>
      </section>

      {/* PROJECTS */}
      <section>
        <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Project 1 */}
          <div className="group border border-neutral-800 bg-neutral-900/50 p-6 rounded-lg hover:border-neutral-600 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">HAXFORD - SearxNG</h3>
              <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">FEATURED</span>
            </div>
            <p className="text-sm text-neutral-400 mb-4">
              Privacy-focused search interface using Next.js API routes as a smart proxy. 
              Aggregates results from multiple public SearXNG instances for resilience.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-2 py-1 bg-neutral-800 rounded text-neutral-300">Next.js API</span>
              <span className="text-xs px-2 py-1 bg-neutral-800 rounded text-neutral-300">Proxy Pattern</span>
              <span className="text-xs px-2 py-1 bg-neutral-800 rounded text-neutral-300">Resilience</span>
            </div>
            <div className="flex items-center gap-2 mb-4 p-2 bg-neutral-950 rounded border border-neutral-800 w-fit">
               <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white">
                 <Search size={14} strokeWidth={3} />
               </div>
               <span className="text-xs text-neutral-400 font-mono">Custom Interface</span>
            </div>
            <div className="flex gap-4">
              <a href="/searxng/index.html" className="text-sm flex items-center gap-1 text-neutral-500 hover:text-white transition-colors">
                Live Demo <ExternalLink size={12} />
              </a>
              <a href="https://github.com/Haxford/search-engine-Project" className="text-sm flex items-center gap-1 text-neutral-500 hover:text-white transition-colors">
                GitHub <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border border-neutral-800 bg-neutral-900/50 p-6 rounded-lg hover:border-neutral-600 transition-colors">
            <h3 className="font-semibold text-white mb-2">Password Generator</h3>
            <p className="text-sm text-neutral-400 mb-4">Browser-based secure password generator focusing on DOM manipulation.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-2 py-1 bg-neutral-800 rounded text-neutral-300">JavaScript</span>
            </div>
            <div className="flex gap-4">
              <a href="https://password-generator-gamma-ruby-19.vercel.app" className="text-sm flex items-center gap-1 text-neutral-500 hover:text-white transition-colors">
                Live Demo <ExternalLink size={12} />
              </a>
              <a href="https://github.com/Haxford/Password-generator" className="text-sm flex items-center gap-1 text-neutral-500 hover:text-white transition-colors">
                GitHub <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="border border-neutral-800 bg-neutral-900/50 p-6 rounded-lg hover:border-neutral-600 transition-colors">
            <h3 className="font-semibold text-white mb-2">Basketball Scoreboard</h3>
            <p className="text-sm text-neutral-400 mb-4">Interactive scoreboard with real-time state management.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-2 py-1 bg-neutral-800 rounded text-neutral-300">JS State</span>
            </div>
            <div className="flex gap-4">
              <a href="https://keepingscore1.netlify.app" className="text-sm flex items-center gap-1 text-neutral-500 hover:text-white transition-colors">
                Live Demo <ExternalLink size={12} />
              </a>
              <a href="https://github.com/Haxford/keeping-score" className="text-sm flex items-center gap-1 text-neutral-500 hover:text-white transition-colors">
                GitHub <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="border border-neutral-800 bg-neutral-900/50 p-6 rounded-lg hover:border-neutral-600 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-white mb-2">Jellyfin Request Plugin</h3>
              <span className="text-xs font-bold text-orange-400/80 bg-orange-400/10 px-2 py-1 rounded">AI Assisted</span>
              <span className="text-xs font-bold text-yellow-400/80 bg-yellow-400/10 px-2 py-1 rounded">In Progress</span>
            </div>
            <p className="text-sm text-neutral-400 mb-4">
              A Jellyfin plugin that adds a one-click request button to movie and TV show 
              detail pages. Requests are sent directly to your Jellyseerr instance.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-2 py-1 bg-neutral-800 rounded text-neutral-300">C#</span>
              <span className="text-xs px-2 py-1 bg-neutral-800 rounded text-neutral-300">Jellyfin Plugin</span>
              <span className="text-xs px-2 py-1 bg-neutral-800 rounded text-neutral-300">Personal Tool</span>
            </div>
            <div className="flex items-center gap-2 mb-4 p-2 bg-neutral-950 rounded border border-neutral-800 w-fit">
              <Bot size={14} className="text-orange-400" />
              <span className="text-xs text-neutral-400 font-mono">Built with AI assistance</span>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/Haxford/Jellyfin-Jellyseer-request" className="text-sm flex items-center gap-1 text-neutral-500 hover:text-white transition-colors">
                GitHub <ExternalLink size={12} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section>
        <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">Infrastructure / Homelab</h2>
        <div className="bg-neutral-900/30 border border-neutral-800 p-6 rounded-lg">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Server size={18} className="text-neutral-500 mt-1" />
              <span className="text-neutral-300">Proxmox virtualisation with LXC containers</span>
            </li>
            <li className="flex items-start gap-3">
              <Server size={18} className="text-neutral-500 mt-1" />
              <span className="text-neutral-300">Unraid NAS with NFS/SMB integration</span>
            </li>
            <li className="flex items-start gap-3">
              <Network size={18} className="text-neutral-500 mt-1" />
              <span className="text-neutral-300">UniFi networking stack</span>
            </li>
            <li className="flex items-start gap-3">
              <Terminal size={18} className="text-neutral-500 mt-1" />
              <span className="text-neutral-300">Docker Compose deployments</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500 mt-2 ml-1 mr-1.5" />
              <span className="text-neutral-300 italic">"Diagnosed storage bottleneck by identifying containers incorrectly stored on network storage vs local NVMe"</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SKILLS */}
      <section>
        <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-white mb-2">Infrastructure</h3>
            <p className="text-neutral-400 text-sm">Proxmox, Docker, LXC, Unraid, UniFi</p>
          </div>
          <div>
            <h3 className="font-medium text-white mb-2">Microsoft</h3>
            <p className="text-neutral-400 text-sm">Intune, Active Directory, M365, Azure fundamentals</p>
          </div>
          <div>
            <h3 className="font-medium text-white mb-2">Languages</h3>
            <p className="text-neutral-400 text-sm">JavaScript, Python (learning), Bash, Lua</p>
          </div>
          <div>
            <h3 className="font-medium text-white mb-2">Tools</h3>
            <p className="text-neutral-400 text-sm">Neovim, Git, Linux</p>
          </div>
          <div>
            <h3 className="font-medium text-white mb-2">Platforms</h3>
            <p className="text-neutral-400 text-sm">Linux, macOS, Windows</p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section>
        <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">Certifications</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-green-500" size={20} />
            <div>
              <p className="text-white font-medium">Level 3 Azure Support Specialist</p>
              <p className="text-xs text-neutral-500">Distinction (2025)</p>
            </div>
          </div>
          <div className="flex items-center gap-4 opacity-75">
            <div className="h-5 w-5 rounded-full border-2 border-neutral-700 flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
            </div>
            <div>
              <p className="text-neutral-300 font-medium">CompTIA Network+</p>
              <p className="text-xs text-neutral-500">In Progress</p>
            </div>
          </div>
          <div className="flex items-center gap-4 opacity-50">
            <div className="h-5 w-5 rounded-full border-2 border-neutral-800" />
            <div>
              <p className="text-neutral-400 font-medium">RHCSA</p>
              <p className="text-xs text-neutral-500">Planned</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section>
        <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">Contact</h2>
        <a 
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-neutral-300 hover:text-white border-b border-neutral-700 hover:border-white pb-1 transition-all"
        >
          Connect on LinkedIn <ExternalLink size={14} />
        </a>
      </section>
    </div>
  );
}

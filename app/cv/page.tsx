import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

export default function CV() {
  return (
    <div className="max-w-3xl mx-auto bg-neutral-900/20 p-8 md:p-12 rounded-lg border border-neutral-800">
      {/* Header */}
      <header className="border-b border-neutral-800 pb-8 mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Harry Axford</h1>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-400">
          <span className="flex items-center gap-2">
            <MapPin size={14} />
            London, UK
          </span>
          <a href="mailto:harryaxford@email.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={14} />
            harryaxford@email.com
          </a>
          <a href="https://linkedin.com/in/harryaxford" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <Linkedin size={14} />
            linkedin.com/in/harryaxford
          </a>
          <span className="flex items-center gap-2">
            <Phone size={14} />
            07XXX XXX XXX
          </span>
        </div>
      </header>

      <div className="space-y-10">
        {/* Profile */}
        <section>
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Profile</h2>
          <p className="text-neutral-300 leading-relaxed">
            1st/2nd Line IT Technician with <span className="text-white font-medium">3+ years of hands-on experience</span> supporting multi-site educational environments. Skilled in Microsoft 365, Active Directory, Intune, and Jamf, with a strong foundation in networking (Cisco Meraki) and endpoint management across Windows and Apple devices. Currently studying towards CompTIA Network+ and building Python/Go skills to move into cloud and DevOps engineering.
          </p>
        </section>

        {/* Key Skills */}
        <section>
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Key Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-white text-sm font-medium mb-2">Endpoints</h3>
              <p className="text-neutral-400 text-sm">Windows, macOS, Apple device management (Jamf)</p>
            </div>
            <div>
              <h3 className="text-white text-sm font-medium mb-2">Identity & Access</h3>
              <p className="text-neutral-400 text-sm">Microsoft 365, Azure Active Directory, Intune</p>
            </div>
            <div>
              <h3 className="text-white text-sm font-medium mb-2">Networking</h3>
              <p className="text-neutral-400 text-sm">Cisco Meraki, TCP/IP, DHCP, DNS, VPN, basic firewall rules</p>
            </div>
            <div>
              <h3 className="text-white text-sm font-medium mb-2">Systems</h3>
              <p className="text-neutral-400 text-sm">Windows Server, Linux (home-lab), Proxmox virtualisation</p>
            </div>
            <div>
              <h3 className="text-white text-sm font-medium mb-2">Automation</h3>
              <p className="text-neutral-400 text-sm">Python scripting, Bash</p>
            </div>
            <div>
              <h3 className="text-white text-sm font-medium mb-2">Ticketing</h3>
              <p className="text-neutral-400 text-sm">SysAid, service desk best practice</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">Experience</h2>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-semibold text-white text-lg">IT Technician</h3>
                <span className="text-sm text-neutral-500 font-mono">Sept 2025 — Present</span>
              </div>
              <div className="text-blue-400 text-sm mb-3">Oasis Community Learning</div>
              <p className="text-neutral-400 text-sm mb-3 italic">
                Progression: Volunteer (Oct 2022) → Level 3 Azure Support Specialist Apprenticeship (2023–2025, Distinction) → employed directly.
              </p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-300 text-sm">
                <li>Manage ~1,000+ devices across multiple academy sites using Microsoft Intune and Jamf</li>
                <li>Administer Microsoft 365 and Azure Active Directory — user accounts, groups, permissions, shared mailboxes</li>
                <li>1st/2nd line support across all sites; triage, diagnose, and resolve incidents and service requests</li>
                <li>Built and maintain an IT knowledge base covering common technical issues — now used cluster-wide to improve support consistency</li>
                <li>Configure and support Cisco Meraki networking equipment across sites</li>
                <li>Assisted with projects including Windows migrations and infrastructure improvements</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-semibold text-white text-lg">Apprentice — Azure Support Specialist (Level 3, Distinction)</h3>
                <span className="text-sm text-neutral-500 font-mono">2023 — 2025</span>
              </div>
              <div className="text-blue-400 text-sm mb-3">Oasis Community Learning</div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-300 text-sm">
                <li>Achieved Distinction across all modules</li>
                <li>Built foundational skills in cloud services, identity management, and IT support operations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Projects</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-white font-medium mb-1">Home Lab — Self-directed, ongoing</h3>
              <p className="text-neutral-400 text-sm">
                Linux server environment (Ubuntu/Debian) running in Proxmox. Experimenting with networking, web hosting, and automation scripting in Python. Supports ongoing study and skill development outside of work.
              </p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Python Scripting — Ongoing</h3>
              <p className="text-neutral-400 text-sm">
                Small automation scripts for personal learning (file management, system tasks). Currently working through Boot.dev Python and Go courses.
              </p>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section>
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Education & Certifications</h2>
          <ul className="space-y-4 text-neutral-300">
            <li>
              <div className="flex justify-between">
                <span className="text-white">CompTIA Network+</span>
                <span className="text-neutral-500 text-sm">In Progress</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span className="text-white">Level 3 Azure Support Specialist Apprenticeship</span>
                <span className="text-green-400 text-sm">Distinction, 2025</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span className="text-white">ITQ Level 3</span>
                <span className="text-neutral-500 text-sm">IT Professional Qualification</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span className="text-white">GCSE ICT</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Studying */}
        <section>
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Currently Studying</h2>
          <ul className="space-y-2 text-neutral-300 text-sm">
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2" />
              <span>CompTIA Network+ — exam prep, target Q2 2026</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2" />
              <span>Boot.dev — Python and Go courses (backend development pathway)</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2" />
              <span>Personal projects in Linux and Proxmox (home-lab environment)</span>
            </li>
          </ul>
        </section>

        {/* Tech I Use Regularly */}
        <section>
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Tech I Use Regularly</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Microsoft 365", "Azure AD", "Intune", "Jamf", "Cisco Meraki",
              "SysAid", "Windows Server", "Linux", "Proxmox", "Python", "GitHub"
            ].map(tech => (
              <span key={tech} className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

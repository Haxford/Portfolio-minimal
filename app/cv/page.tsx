import { Mail, Linkedin } from 'lucide-react';

export default function CV() {
  return (
    <div className="max-w-3xl mx-auto bg-neutral-900/20 p-8 md:p-12 rounded-lg border border-neutral-800">
      {/* Header */}
      <header className="border-b border-neutral-800 pb-8 mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Harry Axford</h1>
        <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
          <a href="mailto:harry.gamon@outlook.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={16} /> harry.gamon@outlook.com
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </header>

      <div className="space-y-10">
        {/* Profile */}
        <section>
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Profile</h2>
          <p className="text-neutral-300 leading-relaxed">
            IT Technician with 3 years of hands-on experience providing on-site technical support across multi-site educational environments. 
            Experienced working within Microsoft Intune, Active Directory, and Microsoft 365 environments daily. 
            Strong problem-solving abilities with a service-oriented approach. 
            Looking to develop further into Linux system administration and cloud engineering.
          </p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">Experience</h2>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-semibold text-white text-lg">IT Technician</h3>
                <span className="text-sm text-neutral-500 font-mono">Jun 2025 - Present</span>
              </div>
              <div className="text-blue-400 text-sm mb-3">Oasis Community Learning</div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-300 text-sm">
                <li>Sole IT support for 2 academies within a 7-academy cluster</li>
                <li>Continued responsibilities from apprenticeship role</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-semibold text-white text-lg">IT Technician - Azure Support Specialist (Apprenticeship)</h3>
                <span className="text-sm text-neutral-500 font-mono">Sep 2023 - Jun 2025</span>
              </div>
              <div className="text-blue-400 text-sm mb-3">Oasis Community Learning</div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-300 text-sm">
                <li>Provided field-based IT support across a 7-academy cluster, troubleshooting hardware, software, and user issues</li>
                <li>Managed device deployment and troubleshooting through Microsoft Intune</li>
                <li>Supported mixed Apple and Windows environment including iPads, MacBooks, and classroom AV equipment</li>
                <li>Handled user onboarding with account setup, device provisioning, and training</li>
                <li>Completed Level 3 apprenticeship with Distinction</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Certifications</h2>
          <ul className="space-y-2 text-neutral-300">
            <li className="flex justify-between">
              <span>Level 3 Azure Support Specialist</span>
              <span className="text-neutral-500 text-sm">Distinction (2025)</span>
            </li>
            <li className="flex justify-between">
              <span>CompTIA Network+</span>
              <span className="text-neutral-500 text-sm">In Progress</span>
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Microsoft Intune", "Active Directory", "Microsoft 365", 
              "Apple device support", "Windows", "AV equipment", 
              "Docker", "Proxmox", "Linux"
            ].map(skill => (
              <span key={skill} className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

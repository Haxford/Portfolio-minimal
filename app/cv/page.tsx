import { Mail, Linkedin } from 'lucide-react';

export default function CV() {
  return (
    <div className="max-w-3xl mx-auto bg-neutral-900/20 p-8 md:p-12 rounded-lg border border-neutral-800">
      {/* Header */}
      <header className="border-b border-neutral-800 pb-8 mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Harry Axford</h1>
        <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
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
            Previous experience supporting Apple devices through Jamf. 
            Strong problem-solving abilities with a service-oriented approach. 
            Looking to further develop technical capabilities in device management, security, and systems administration.
          </p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">Experience</h2>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-semibold text-white text-lg">IT Technician</h3>
                <span className="text-sm text-neutral-500 font-mono">2021 - Present</span>
              </div>
              <div className="text-blue-400 text-sm mb-3">Oasis Community Learning</div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-300 text-sm">
                <li>On-site IT Technician responsible for two academies within a seven-academy cluster, providing hands-on technical support and ensuring staff can work efficiently without disruption</li>
                <li>Work within Microsoft Intune daily for device support and troubleshooting</li>
                <li>Previously supported Apple devices through Jamf before the organisation transitioned to Intune</li>
                <li>Support user access through Active Directory group membership management, ensuring staff have appropriate permissions</li>
                <li>Troubleshoot Microsoft 365 access issues and assist with onboarding IT setup</li>
                <li>Maintain and troubleshoot AV equipment in meeting rooms and teaching spaces, including interactive displays, projectors, and conferencing systems</li>
                <li>Log, track, and resolve IT issues using SysAid ticketing system</li>
                <li>Liaise with external suppliers and managed service providers on escalated issues</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section>
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Qualifications</h2>
          <ul className="space-y-4 text-neutral-300">
            <li>
              <div className="flex justify-between">
                <span>Level 3 Cloud and Networking Apprenticeship (Level 3 Azure Support Specialist)</span>
                <span className="text-neutral-500 text-sm">Distinction (2023-2025)</span>
              </div>
              <div className="text-neutral-500 text-sm mt-1">QA</div>
            </li>
            <li>
              <div className="flex justify-between">
                <span>ITQ, Maths, English (Level 3)</span>
                <span className="text-neutral-500 text-sm">2018-2019</span>
              </div>
              <div className="text-neutral-500 text-sm mt-1">Bosco College</div>
            </li>
            <li>
              <div className="flex justify-between">
                <span>CompTIA Network+</span>
                <span className="text-neutral-500 text-sm">Currently Studying</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Microsoft Intune", "Jamf", "Microsoft 365", "Active Directory", 
              "Cisco Meraki", "AV Equipment", "Windows Support", "Apple Support",
              "SysAid", "Asset Management", "Linux", "Python", "PowerShell"
            ].map(skill => (
              <span key={skill} className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Additional Information */}
        <section>
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Additional Information</h2>
          <div className="space-y-2 text-neutral-300 text-sm">
            <p><span className="text-neutral-400">Notice Period:</span> 1 month</p>
            <p><span className="text-neutral-400">Technical Interests:</span> Linux systems (home lab), scripting (Python, PowerShell), automation</p>
          </div>
        </section>
      </div>
    </div>
  );
}

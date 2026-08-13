import React from 'react';

export const InteroperabilityRibbon: React.FC = () => {
  const vendors = [
    { name: "Credly", type: "Open Badges 2.0/3.0" },
    { name: "PMI® (PMP)", type: "Project Management" },
    { name: "AWS Certification", type: "Cloud Badges" },
    { name: "State Nursing Boards", type: "RN / LPN License" },
    { name: "NREMT", type: "Emergency Services" },
    { name: "OSHA & Trades", type: "Compliance Badges" },
    { name: "Google & Microsoft", type: "Professional Certs" }
  ];

  return (
    <div className="py-10 bg-slate-950/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
          Seamlessly Imports & Verifies Credentials From
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {vendors.map((vendor, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl glass-card border border-slate-800 hover:border-teal-500/40 transition-all group"
            >
              <div className="w-2 h-2 rounded-full bg-teal-400 group-hover:bg-amber-400 transition-colors" />
              <div>
                <span className="font-semibold text-slate-200 text-sm group-hover:text-white transition-colors">{vendor.name}</span>
                <span className="block text-xs text-slate-400 font-medium">{vendor.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

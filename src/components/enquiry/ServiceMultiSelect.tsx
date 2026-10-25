'use client';

import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { serviceOptions } from '@/content/enquiryOptions';

type Props = { selected: string[]; onChange: (values: string[]) => void; error?: string };

export default function ServiceMultiSelect({ selected, onChange, error }: Props) {
  const [search, setSearch] = useState('');
  const options = serviceOptions.filter(option => option.value);
  const visible = options.filter(option => option.label.toLowerCase().includes(search.trim().toLowerCase()));
  const toggle = (value: string) => onChange(selected.includes(value) ? selected.filter(item => item !== value) : [...selected, value]);

  return <fieldset className="md:col-span-2 min-w-0" aria-describedby={`services-help${error ? ' error-service' : ''}`}>
    <legend className="block text-xs font-semibold uppercase tracking-wider text-[#2C0713] mb-2">Service Interests <span className="text-[#A6803B]">*</span></legend>
    <p id="services-help" className="text-xs text-[#70656A] mb-3">Choose one or more services. You can combine choreography, entries and live entertainment.</p>
    <details className={`rounded-xl border bg-[#FAF7F2] ${error ? 'border-red-400' : 'border-[#E8DFD5]'}`}>
      <summary id="enquiry-service" aria-invalid={Boolean(error)} aria-describedby={error ? 'error-service' : 'services-help'} className="list-none cursor-pointer flex items-center justify-between gap-3 px-4 py-3 text-sm text-[#292526] focus-visible:outline-2 focus-visible:outline-[#BD954E] rounded-xl">
        <span>{selected.length ? `${selected.length} service${selected.length === 1 ? '' : 's'} selected` : 'Choose your celebration services'}</span><ChevronDown size={17} className="shrink-0" aria-hidden="true" />
      </summary>
      <div className="border-t border-[#E8DFD5] p-3">
        <input type="search" aria-label="Find a service" value={search} onChange={event => setSearch(event.target.value)} maxLength={80} placeholder="Search services…" className="w-full min-w-0 px-3 py-3 mb-2 rounded-lg border border-[#E8DFD5] text-sm bg-white focus:outline-2 focus:outline-[#BD954E]" />
        <div className="max-h-64 overflow-y-auto overscroll-contain" role="group" aria-label="Available celebration services">
          {visible.map(option => <label key={option.value} className="flex items-start gap-3 px-2 py-3 min-h-11 cursor-pointer text-sm text-[#4A1525] rounded-lg hover:bg-[#F7EDF1]">
            <input type="checkbox" value={option.value} checked={selected.includes(option.value)} onChange={() => toggle(option.value)} className="mt-0.5 shrink-0 w-4 h-4 accent-[#4A1525]" />
            <span className="min-w-0 break-words">{option.label}</span>
          </label>)}
          {!visible.length && <p className="text-sm text-[#70656A] p-3">No services match. Try a different search.</p>}
        </div>
      </div>
    </details>
    {selected.length > 0 && <ul className="flex flex-wrap gap-2 mt-3" aria-label="Selected services">{options.filter(option => selected.includes(option.value)).map(option => <li key={option.value} className="flex min-w-0 max-w-full items-center gap-2 pl-3 pr-1 py-1 rounded-xl bg-[#F7EDF1] border border-[#DFCBB0] text-xs text-[#4A1525]">
      <span className="break-words min-w-0">{option.label}</span><button type="button" onClick={() => toggle(option.value)} aria-label={`Remove ${option.label}`} className="shrink-0 p-3 rounded-lg hover:bg-[#EAD9DF]"><X size={13} aria-hidden="true" /></button>
    </li>)}</ul>}
    {error && <p id="error-service" className="text-xs text-red-600 mt-2">{error}</p>}
  </fieldset>;
}

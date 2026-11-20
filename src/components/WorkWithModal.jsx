import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Mail, X } from 'lucide-react';
import { profile } from '../data/profile.js';

const PROJECT_TYPES = ['Landing Page', 'Web App', 'Secure Admin Panel', 'Overall System Design', 'Others'];

const emptyForm = {
  name: '',
  contact: '',
  company: '',
  projectType: PROJECT_TYPES[0],
  note: '',
};

const inputCls =
  'w-full rounded-2xl border border-stone-200 bg-white/80 px-4 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-4 focus:ring-zinc-900/5';

function buildMessage(f) {
  return [
    'Hi Sumit, I would like to discuss a project.',
    '',
    `Name: ${f.name}`,
    `Contact: ${f.contact}`,
    `Company / Brand: ${f.company || 'Not provided'}`,
    `Project Type: ${f.projectType}`,
    `Brief Note: ${f.note || 'Not provided'}`,
  ].join('\n');
}

export default function WorkWithModal({ open, onClose }) {
  const [form, setForm] = useState(emptyForm);
  const formRef = useRef(null);

  // Close on Escape and lock background scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Uses native HTML validation on the required fields
  const isValid = () => formRef.current?.reportValidity();

  const sendWhatsApp = () => {
    if (!isValid()) return;
    const url = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(buildMessage(form))}`;
    window.open(url, '_blank');
  };

  const sendEmail = () => {
    if (!isValid()) return;
    const subject = `Project Inquiry: ${form.projectType} - ${form.name}`;
    const body = buildMessage(form);
    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}` +
      `&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const mailtoUrl =
      `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // If the browser blocks the new tab, fall back to the default mail app
    const win = window.open(gmailUrl, '_blank');
    if (!win) window.location.href = mailtoUrl;
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-zinc-900/30 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="wwm-title"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="glass-strong relative max-h-[92vh] w-full overflow-y-auto rounded-t-[2rem] p-6 sm:max-w-lg sm:rounded-[2rem] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="wwm-title" className="font-serif text-3xl">Let's work together</h2>
                <p className="mt-1 text-sm text-zinc-600">Share a few details and I'll get back to you.</p>
              </div>
              <button onClick={onClose} aria-label="Close" className="glass grid h-9 w-9 shrink-0 place-items-center rounded-full">
                <X size={16} />
              </button>
            </div>

            <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
              <Field label="Your Name" required>
                <input name="name" required value={form.name} onChange={update} className={inputCls} placeholder="Jane Doe" />
              </Field>

              <Field label="Contact Info (phone or email)" required>
                <input name="contact" required value={form.contact} onChange={update} className={inputCls} placeholder="+977 98… or you@email.com" />
              </Field>

              <Field label="Company / Brand Name">
                <input name="company" value={form.company} onChange={update} className={inputCls} placeholder="Optional" />
              </Field>

              <Field label="Project Type">
                <select name="projectType" value={form.projectType} onChange={update} className={inputCls}>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>

              <Field label="Brief Project Note">
                <textarea name="note" rows={3} value={form.note} onChange={update} className={inputCls} placeholder="A few lines about what you need (optional)" />
              </Field>
            </form>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button type="button" onClick={sendWhatsApp} className="btn-whatsapp">
                <MessageCircle size={16} /> Send via WhatsApp
              </button>
              <button type="button" onClick={sendEmail} className="btn-primary">
                <Mail size={16} /> Send via Email (Gmail)
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-zinc-800">
        {label}
        {required && <span className="text-rose-500"> *</span>}
      </span>
      {children}
    </label>
  );
}

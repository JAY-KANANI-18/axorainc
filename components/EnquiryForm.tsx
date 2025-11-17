import React, { useState } from "react";

type EnquiryFormProps = {
  context?: { category?: string; pageSlug?: string; pageTitle?: string };
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EnquiryForm: React.FC<EnquiryFormProps> = ({ context }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [failure, setFailure] = useState<string | null>(null);

  function validate() {
    const e: Record<string, string> = {};
    if (!name || name.trim().length < 2) e.name = "Please enter your name.";
    if (!emailRegex.test(email)) e.email = "Enter a valid work email.";
    if (!message || message.trim().length < 10)
      e.message = "Please share a bit more about your hiring needs.";
    if (!agree) e.agree = "Please accept the terms.";
    return e;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setSuccess(null);
    setFailure(null);
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    if (website) return; // bot

    try {
      setLoading(true);
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, phone, message, context }),
      });
      const data = await res.json();
      if (res.ok && data?.ok) {
        setSuccess("Thanks! We’ll get back within 1 business day.");
        setName("");
        setEmail("");
        setCompany("");
        setPhone("");
        setMessage("");
        setAgree(false);
        // Analytics (no PII)
        if (typeof window !== "undefined") {
          try {
            (window as any).dataLayer = (window as any).dataLayer || [];
            (window as any).dataLayer.push({
              event: "enquiry_submit",
              category: context?.category || "general",
              pageSlug: context?.pageSlug || "",
              pageTitle: context?.pageTitle || "",
            });
            window.dispatchEvent(
              new CustomEvent("enquiry:submitted", {
                detail: {
                  category: context?.category || "general",
                  pageSlug: context?.pageSlug || "",
                  pageTitle: context?.pageTitle || "",
                },
              })
            );
          } catch (_) {
            // ignore analytics errors
          }
        }
      } else {
        setFailure("Submission failed. Please try again later.");
      }
    } catch (err) {
      setFailure("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-6 md:p-10 border" noValidate>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Full name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-400" : "border-slate-200"}`}
            placeholder="Jane Doe"
            required
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Work email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-400" : "border-slate-200"}`}
            placeholder="jane@company.com"
            required
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Company</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border-slate-200"
            placeholder="Acme Inc."
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border-slate-200"
            placeholder="+1 555 123 4567"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-2">What talent do you need? *</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full min-h-[140px] rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? "border-red-400" : "border-slate-200"}`}
            placeholder="e.g., 2 Senior React engineers for a design system and app router migration"
            required
          />
          {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
        </div>
        <div className="hidden">
          <label>Website</label>
          <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        <div className="md:col-span-2 flex items-start gap-3">
          <input id="agree" type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className={`mt-1 h-5 w-5 rounded border-slate-300 ${errors.agree ? "border-red-400" : ""}`} />
          <label htmlFor="agree" className="text-sm text-slate-700">
            I agree to be contacted about my request and accept the Privacy Policy.
          </label>
        </div>
      </div>

      {success && <div className="mt-6 p-3 rounded bg-green-50 text-green-700 border border-green-200">{success}</div>}
      {failure && <div className="mt-6 p-3 rounded bg-red-50 text-red-700 border border-red-200">{failure}</div>}

      <div className="mt-8">
        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Request Shortlist"}
        </button>
      </div>
    </form>
  );
};

export default EnquiryForm;

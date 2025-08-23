// src/Pages/contact/Contact.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  fullName: string;
  email: string;
  topic: "General Support" | "Driver Onboarding" | "Safety & Trust" | "Billing";
  subject: string;
  message: string;
  agree: boolean;
  // simple honeypot to deter bots
  website?: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: {
      topic: "General Support",
      agree: true,
    },
    mode: "onChange",
  });

  const messageVal = watch("message") ?? "";
  const [serverMsg, setServerMsg] = useState<string>("");

  const onSubmit = async (values: FormValues) => {
    // honeypot: if filled, silently block
    if (values.website) return;

    setServerMsg("");
    // 📨 simulate network call
    await new Promise(r => setTimeout(r, 1200));

    // preview payload locally (you can swap with real API later)
    // eslint-disable-next-line no-console
    console.log("Contact form payload →", values);

    setServerMsg(
      "Thanks! Your message was sent (simulated). We’ll get back to you soon."
    );
    reset({ topic: values.topic, agree: true }); // keep topic & consent checked
  };

  const emailRegex = useMemo(
    () =>
      // simple RFC5322-ish email pattern
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    []
  );

  return (
    <main className="min-h-[calc(100vh-200px)]">
      {/* hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% -10%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(900px 500px at 110% 10%, rgba(168,85,247,0.12) 0%, transparent 60%)",
        }}
      >
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Contact Us
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Questions, feedback, or partnership ideas? Slide into our inbox—this
            submission is simulated for now.
          </p>
        </div>
      </section>

      {/* content */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* form card */}
          <div
            className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm ring-1 ring-transparent backdrop-blur-sm transition-all"
            style={{
              background:
                "linear-gradient(180deg, rgba(241,245,249,0.35) 0%, rgba(255,255,255,0.95) 100%)",
            }}
          >
            {/* accent line */}
            <div className="pointer-events-none -mx-6 -mt-6 mb-4 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500" />

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* name + email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" error={errors.fullName?.message}>
                  <input
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-blue-100"
                    {...register("fullName", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                  />
                </Field>

                <Field label="Email" error={errors.email?.message}>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-blue-100"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: emailRegex,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                </Field>
              </div>

              {/* topic + subject */}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Topic" error={errors.topic?.message}>
                  <select
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-blue-100"
                    {...register("topic", {
                      required: "Please select a topic",
                    })}
                  >
                    <option>General Support</option>
                    <option>Driver Onboarding</option>
                    <option>Safety & Trust</option>
                    <option>Billing</option>
                  </select>
                </Field>

                <Field label="Subject" error={errors.subject?.message}>
                  <input
                    type="text"
                    placeholder="What’s this about?"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-blue-100"
                    {...register("subject", {
                      required: "Subject is required",
                      minLength: {
                        value: 4,
                        message: "Subject must be at least 4 characters",
                      },
                    })}
                  />
                </Field>
              </div>

              {/* message + counter */}
              <div className="mt-4">
                <Field label="Message" error={errors.message?.message}>
                  <textarea
                    rows={6}
                    placeholder="Share as much context as possible so we can help faster…"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-blue-100"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 20,
                        message: "Please write at least 20 characters",
                      },
                      maxLength: {
                        value: 1000,
                        message: "Max 1000 characters",
                      },
                    })}
                  />
                </Field>
                <div className="mt-1 text-right text-[11px] text-slate-500">
                  {messageVal.length}/1000
                </div>
              </div>

              {/* consent + honeypot */}
              <div className="mt-4 flex items-start gap-2">
                <input
                  id="agree"
                  type="checkbox"
                  className="mt-1 h-4 w-4 cursor-pointer rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  {...register("agree", {
                    required: "Please agree to be contacted",
                  })}
                />
                <label htmlFor="agree" className="text-xs text-slate-600">
                  I agree to be contacted about my inquiry.
                </label>
              </div>
              {errors.agree && (
                <p className="mt-1 text-xs text-rose-600">
                  {errors.agree.message}
                </p>
              )}

              {/* honeypot (hidden) */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                {...register("website")}
              />

              {/* actions */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <Spinner /> Sending…
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => reset()}
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 sm:w-auto"
                >
                  Reset
                </button>
              </div>

              {/* server message */}
              {isSubmitSuccessful && serverMsg && (
                <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  {serverMsg}
                </div>
              )}
            </form>
          </div>

          {/* side panel */}
          <aside className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Contact Details
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>📧 support@ridego.com</li>
              <li>📞 +880 123 456 789</li>
              <li>📍 Dhaka, Bangladesh</li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-900">
                Response Time
              </h4>
              <p className="mt-1 text-sm text-slate-600">
                We usually reply within <b>24–48 hours</b> on business days.
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-gradient-to-br from-blue-50 to-fuchsia-50 p-4 text-sm text-slate-700">
              <b>Note:</b> This form is a simulated submission in development.
              You can connect a real endpoint later.
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

/* --- tiny presentational bits --- */

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-slate-600">{label}</label>
      <div className="mt-1">{children}</div>
      {error ? <p className="mt-1 text-xs text-rose-600">{error}</p> : null}
    </div>
  );
}

function Spinner() {
  return (
    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
  );
}

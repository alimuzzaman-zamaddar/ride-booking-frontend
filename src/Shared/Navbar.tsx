// src/components/Navbar.tsx
import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../components/Logo/Logo";


type LinkItem = { label: string; to: string };

const links: LinkItem[] = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  // add subtle glass when scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // read auth (same pattern you’ve used elsewhere)
  const userStr = localStorage.getItem("userData");
  const user = userStr ? JSON.parse(userStr) : null;
  const role: "rider" | "driver" | "admin" | undefined = user?.role;

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 ${
        scrolled ? "bg-white/70 shadow-sm" : "bg-white/60"
      }`}
    >
      {/* gradient top accent */}
      <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500" />

      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* left: logo */}
        <Link to="/" aria-label="RideGo Home" className="flex items-center">
          <Logo />
        </Link>

        {/* center: desktop links */}
        <ul className="hidden items-center gap-6 xl:flex">
          {links.map(item => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-semibold transition ${
                    isActive
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* right: actions */}
        <div className="hidden items-center gap-3 xl:flex">
          {user ? (
            <>
              <span className="hidden text-xs text-slate-500 sm:inline">
                Signed in as <b className="text-slate-700">{user.email}</b>
              </span>
              <Link
                to="/dashboard"
                className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                {role === "driver"
                  ? "Driver Dashboard"
                  : role === "admin"
                  ? "Admin Dashboard"
                  : "Dashboard"}
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* hamburger */}
        <button
          onClick={() => setOpen(p => !p)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 xl:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Open menu</span>
          <div className="grid place-items-center">
            <Burger open={open} />
          </div>
        </button>
      </nav>

      {/* mobile drawer */}
      <div
        className={`xl:hidden fixed inset-y-0 left-0 z-[60] w-[78%] max-w-xs transform bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Logo className="h-7" />
          <button
            onClick={() => setOpen(false)}
            className="rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:bg-slate-50"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="px-4">
          <ul className="flex flex-col gap-1 py-2">
            {links.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "bg-slate-100 text-slate-900"
                        : "text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-3 border-t border-slate-200 pt-3">
            {user ? (
              <Link
                to="/dashboard"
                className="mb-2 block rounded-xl bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                {role === "driver"
                  ? "Driver Dashboard"
                  : role === "admin"
                  ? "Admin Dashboard"
                  : "Dashboard"}
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="mb-2 block rounded-xl border border-slate-200 bg-white px-4 py-2 text-center text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                >
                  Login
                </Link>
                <Link
                  to="/sign-up"
                  className="block rounded-xl bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <div className="mt-6 px-1 pb-6 text-[11px] text-slate-500">
            © {new Date().getFullYear()} RideGo — Move smarter.
          </div>
        </div>
      </div>

      {/* scrim */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-[1px] xl:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}

function Burger({ open }: { open: boolean }) {
  return (
    <div className="relative h-4 w-5">
      <span
        className={`absolute left-0 top-0 block h-0.5 w-5 rounded bg-slate-800 transition-transform ${
          open ? "translate-y-1.5 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded bg-slate-800 transition-opacity ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 top-3 block h-0.5 w-5 rounded bg-slate-800 transition-transform ${
          open ? "-translate-y-1.5 -rotate-45" : ""
        }`}
      />
    </div>
  );
}

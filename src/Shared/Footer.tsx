// src/components/Footer.tsx
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-200">
      {/* decorative accent */}
      <div className="absolute inset-x-0 -top-1 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500" />

      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-extrabold tracking-tight text-white">
              Ride<span className="text-blue-500">Go</span>
            </h3>
            <p className="mt-3 text-sm text-slate-400 max-w-xs">
              Your trusted partner for safe, fast and cashless rides across
              Bangladesh. Anytime, anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/rideRequest"
                  className="hover:text-white transition-colors duration-200"
                >
                  Request a Ride
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/goOnline"
                  className="hover:text-white transition-colors duration-200"
                >
                  Go Online (Drivers)
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/users"
                  className="hover:text-white transition-colors duration-200"
                >
                  Admin Panel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Contact
            </h4>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                support@ridego.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-400" />
                +880 123 456 789
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-400" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Follow Us
            </h4>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="rounded-full bg-slate-700 p-2 hover:bg-blue-600 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="rounded-full bg-slate-700 p-2 hover:bg-sky-400 transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="rounded-full bg-slate-700 p-2 hover:bg-pink-500 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="rounded-full bg-slate-700 p-2 hover:bg-blue-500 transition"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 border-t border-slate-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} RideGo. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

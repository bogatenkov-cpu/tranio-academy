'use client';
import Link from 'next/link';
import { ArrowLeft, Sparkles, User } from 'lucide-react';

interface AppHeaderProps {
  userName?: string;
  backHref?: string;
  subtitle?: string;
  showProfile?: boolean;
}

export function AppHeader({ userName, backHref, subtitle, showProfile = true }: AppHeaderProps) {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          {backHref && (
            <Link href={backHref} className="p-1.5 hover:bg-slate-100 rounded-lg transition-all text-slate-400 hover:text-slate-600">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          )}
          <Link href="/countries" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base font-bold text-slate-900 leading-tight tracking-tight">RE <span className="text-blue-600">Academy</span></h1>
              {subtitle && <p className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">{subtitle}</p>}
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {userName && (
            <span className="hidden md:block text-sm font-medium text-slate-600">{userName}</span>
          )}
          {showProfile && (
            <Link href="/profile" className="relative">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center hover:border-blue-300 transition-colors">
                <User className="w-4 h-4 text-slate-500" />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export function AppFooter() {
  return (
    <footer className="mt-auto py-5 border-t border-slate-100 bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>RE Academy by Tranio</span>
        </div>
        <p className="text-xs text-slate-400">© {new Date().getFullYear()} Все права защищены</p>
      </div>
    </footer>
  );
}

interface AppShellProps {
  children: React.ReactNode;
  userName?: string;
  backHref?: string;
  subtitle?: string;
  showProfile?: boolean;
}

export default function AppShell({ children, userName, backHref, subtitle, showProfile = true }: AppShellProps) {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased text-slate-900">
      <AppHeader userName={userName} backHref={backHref} subtitle={subtitle} showProfile={showProfile} />
      <main className="flex-grow pt-16 sm:pt-18">
        {children}
      </main>
      <AppFooter />
    </div>
  );
}

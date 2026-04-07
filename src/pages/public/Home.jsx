import { ArrowRight, CalendarDays, CircleCheckBig, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Verified specialists',
    desc: 'Every listed doctor is vetted, rated, and ready for secure digital booking.',
  },
  {
    icon: Sparkles,
    title: 'Frictionless scheduling',
    desc: 'Smart availability and a cleaner booking flow keep appointments moving.',
  },
  {
    icon: CalendarDays,
    title: 'Care that stays organized',
    desc: 'Appointments, reminders, and follow-ups live in one polished workspace.',
  },
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      <section className="hero-gradient relative isolate min-h-screen px-6 pb-20 pt-10 text-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.55),_transparent_34%)]" />

        <div className="mx-auto flex max-w-7xl flex-col gap-16">
          <div className="glass flex items-center justify-between rounded-full px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white">
                <Stethoscope className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-bold tracking-[-0.04em]">Doctorly</p>
                <p className="text-sm text-slate-500">Human-centered healthcare access</p>
              </div>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <Link to="/login">
                <Button variant="ghost">
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button>
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700">
                <CircleCheckBig className="h-4 w-4" />
                Trusted by patients, doctors, and care teams
              </div>

              <h1 className="mt-8 text-5xl font-extrabold leading-[0.94] tracking-[-0.07em] md:text-7xl">
                Modern healthcare booking with warmth, clarity, and speed.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Doctorly helps patients discover trusted specialists, book instantly, and stay on top of care without the usual friction.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/register">
                  <Button className="w-full px-8 py-4 text-base sm:w-auto">
                    Book as Patient
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="w-full px-8 py-4 text-base sm:w-auto"
                  >
                    Doctor or Admin Login
                  </Button>
                </Link>
              </div>
            </div>

            <div className="card rounded-[2rem] p-6">
              <div className="rounded-[1.75rem] border border-sky-100 bg-sky-50/70 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Live booking pulse</p>
                    <p className="mt-2 text-3xl font-bold tracking-[-0.05em] text-slate-900">148 slots open</p>
                  </div>
                  <div className="rounded-full bg-sky-100 px-3 py-2 text-sm font-semibold text-sky-700">
                    +24% this week
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    ['Cardiology', '12 doctors available'],
                    ['Dermatology', 'Same-day appointments'],
                    ['Pediatrics', 'Fastest-growing specialty'],
                  ].map(([title, meta]) => (
                    <div key={title} className="rounded-[1.35rem] border border-sky-100 bg-white p-4">
                      <p className="font-semibold text-slate-900">{title}</p>
                      <p className="mt-1 text-sm text-slate-500">{meta}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700/80">Why Doctorly</p>
          <h2 className="section-title mt-3">A calmer, more premium experience across the entire booking journey.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="card card-hover p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-sky-100 text-sky-700">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-[-0.04em] text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;

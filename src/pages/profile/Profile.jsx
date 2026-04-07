import { ShieldCheck, Stethoscope, UserRound } from 'lucide-react';
import Button from '../../components/common/Button';
import { useAuth } from '../../contexts/AuthContext';

const roleIcons = {
  patient: UserRound,
  doctor: Stethoscope,
  admin: ShieldCheck,
};

const Profile = () => {
  const { user } = useAuth();
  const ActiveIcon = roleIcons[user?.role] || UserRound;

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700/80">Profile</p>
        <h1 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-slate-900">Manage your information</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          Keep your personal details current and tailor the workspace to your role.
        </p>
      </section>

      <section className="card p-8 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="rounded-[1.8rem] bg-slate-50 p-8 text-center">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[1.8rem] bg-gradient-to-br from-cyan-100 to-emerald-100 text-cyan-700">
              <ActiveIcon className="h-12 w-12" />
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-[-0.04em] text-slate-900">{user?.name || 'Jebin Thomas'}</h2>
            <p className="mt-2 text-sm capitalize text-slate-500">{user?.role || 'patient'}</p>
            <button className="mt-6 text-sm font-semibold text-cyan-700">Change Photo</button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="field-label">Full Name</label>
              <input type="text" defaultValue={user?.name || 'Jebin Thomas'} className="field-input" />
            </div>

            <div>
              <label className="field-label">Email Address</label>
              <input type="email" defaultValue={user?.email || 'jebin@example.com'} className="field-input" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="field-label">Phone Number</label>
                <input type="tel" defaultValue="+91 98765 43210" className="field-input" />
              </div>
              <div>
                <label className="field-label">Date of Birth</label>
                <input type="date" className="field-input" />
              </div>
            </div>

            {user?.role === 'doctor' && (
              <div>
                <label className="field-label">Specialty</label>
                <input type="text" defaultValue="Cardiology" className="field-input" />
              </div>
            )}

            <Button className="w-full py-4 text-base">Save Changes</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;

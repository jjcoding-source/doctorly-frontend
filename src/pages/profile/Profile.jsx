import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/common/Button';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">My Profile</h1>
        <p className="text-gray-600 mt-2">Manage your personal information</p>
      </div>

      <div className="card p-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Avatar */}
          <div className="flex-shrink-0 text-center">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-sky-100 to-teal-100 rounded-3xl flex items-center justify-center text-8xl">
              {user?.role === 'doctor' ? '👩‍⚕️' : user?.role === 'admin' ? '🛡️' : '👤'}
            </div>
            <button className="mt-4 text-primary text-sm font-medium">Change Photo</button>
          </div>

          {/* Form */}
          <div className="flex-1 space-y-8">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input 
                type="text" 
                defaultValue={user?.name || "Jebin Thomas"}
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                defaultValue={user?.email || "jebin@example.com"}
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  defaultValue="+91 98765 43210"
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Date of Birth</label>
                <input 
                  type="date" 
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            {user?.role === 'doctor' && (
              <div>
                <label className="block text-sm font-medium mb-2">Specialty</label>
                <input 
                  type="text" 
                  defaultValue="Cardiology"
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary"
                />
              </div>
            )}

            <div className="pt-6">
              <Button className="w-full py-4 text-lg">Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
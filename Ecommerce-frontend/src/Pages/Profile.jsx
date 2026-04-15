import React, { useState } from 'react';
import { User, Mail, LogOut, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  // In a real MERN app, these would come from your Auth Context or an API call
  const [user] = useState({
    username: 'yashOne8',
    email: 'yashpokiya@gmail.com'
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 font-sans">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-100 rounded-full filter blur-[80px] opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-[80px] opacity-60"></div>

      <div className="max-w-sm w-full z-10">
        <div className="bg-white/70 backdrop-blur-2xl border border-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center">
          
          {/* Profile Avatar Area */}
          <div className="relative mx-auto w-24 h-24 mb-6">
            <div className="w-full h-full rounded-3xl bg-linear-to-tr from-indigo-500 to-blue-400 flex items-center justify-center shadow-lg shadow-indigo-200">
              <User size={40} className="text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* User Details */}
          <div className="space-y-1 mb-8">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              {user.username}
            </h1>
            <p className="text-gray-500 font-medium flex items-center justify-center gap-2">
              <Mail size={14} className="text-indigo-400" />
              {user.email}
            </p>
          </div>

          {/* Badge / Status */}
          <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-1.5 rounded-full mb-8">
            <ShieldCheck size={14} className="text-indigo-600" />
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Verified Student</span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-2xl shadow-md transition-all active:scale-[0.98]">
              Manage Account
            </button>
            <Link to="/login" >
            <button className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-red-500 font-bold py-3 transition-all">
              <LogOut size={16} />
              Logout
            </button>
            </Link>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default ProfilePage;
import React, { useState } from 'react';

// WhatsApp-inspired Dark Mode Login Component
export function WhatsAppLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({ phone: '', password: '' });
    const [loading, setLoading] = useState(false);
    const accent = 'bg-emerald-500';

    const onChange = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

    const submit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert(`Logged in as ${form.phone}`);
        }, 800);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b1412] to-[#05110f] p-6">
            <div className="w-full max-w-md">
                <div className="rounded-2xl shadow-2xl overflow-hidden border border-gray-800 bg-[#06120f]/60 backdrop-blur-md">
                    <div className="p-6">
                        <h2 className="text-white text-xl font-semibold mb-6 text-center">Login</h2>
                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <label className="block text-xs text-gray-300 mb-2">Phone</label>
                                <div className="flex gap-2">
                                    <div className="px-3 py-2 rounded-xl bg-[#0b1a17] border border-gray-800 text-gray-200 flex items-center text-sm">+91</div>
                                    <input
                                        value={form.phone}
                                        onChange={onChange('phone')}
                                        placeholder="Enter phone number"
                                        className="flex-1 rounded-xl px-4 py-2 bg-[#0b1a17] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        inputMode="tel"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs text-gray-300 mb-2">Password</label>
                                <div className="relative">
                                    <input
                                        value={form.password}
                                        onChange={onChange('password')}
                                        placeholder="Password"
                                        type={showPassword ? 'text' : 'password'}
                                        className="w-full rounded-xl px-4 py-2 bg-[#0b1a17] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                    <button type="button" onClick={() => setShowPassword((s) => !s)} className="absolute right-3 top-2.5 text-gray-400 text-sm">
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full rounded-xl py-2 font-semibold ${accent} text-white shadow-lg disabled:opacity-60 disabled:cursor-not-allowed`}
                            >
                                {loading ? 'Please wait...' : 'Log in'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

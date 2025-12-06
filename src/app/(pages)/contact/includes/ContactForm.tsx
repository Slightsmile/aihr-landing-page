'use client'

import React from 'react';
import {v4 as uuidv4} from 'uuid'; 

const ContactForm = () => {
    
        const [name, setName] = React.useState('');
        const [email, setEmail] = React.useState('');
        const [message, setMessage] = React.useState('');
        const [loading, setLoading] = React.useState(false);
    
        const handleFormData = async (e: React.FormEvent) => {
            e.preventDefault();
            setLoading(true);
    
            const formData = {
                id: uuidv4(),
                name,
                email,
                message,
                created_at: new Date().toISOString(),
            };

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
    
                if (response.ok) {
                    setName('');
                    setEmail('');
                    setMessage('');
                } else {
                    console.error('Error submitting form');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            } finally {
                setLoading(false);
            }
        };

    return (
        <div className="p-[1.5px] rounded-3xl bg-gradient-to-r from-[#3c3c3c] to-[#053107] w-full">
            <div className="rounded-3xl bg-gray-950 p-6 md:p-8 lg:p-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#f2f2f2] mb-2">
                    Send <span className="text-[#9dffa1]">Personalized</span> Message
                </h2>
                
                <form className="space-y-4 md:space-y-6 mt-6 md:mt-8" onSubmit={handleFormData}>
                {/* Name Input */}
                <div>
                    <label className="block text-xs md:text-sm font-medium text-white mb-2">Name</label>
                    <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#a9aaa9] to-[#3d603f]">
                        <div className="rounded-xl bg-gray-950">
                            <input 
                                type="text" 
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border-none text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-colors bg-transparent text-sm md:text-base"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-xs md:text-sm font-medium text-white mb-2">Email</label>
                    <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#a9aaa9] to-[#3d603f]">
                        <div className="rounded-xl bg-gray-950">
                            <input 
                                type="email" 
                                placeholder="mnoorhammad@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border-none text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-colors bg-transparent text-sm md:text-base"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-xs md:text-sm font-medium text-white mb-2">Message</label>
                    <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#a9aaa9] to-[#3d603f]">
                        <div className="rounded-xl bg-gray-950">
                            <textarea 
                                placeholder="Leave a message"
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border-none text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-colors resize-none bg-transparent text-sm md:text-base"
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* Send Button */}
                <div className="p-[3px] rounded-full bg-gradient-to-r from-[#d4d6d5] to-[#32b837]">
                        <button className="w-full py-2 md:py-3 px-6 bg-[#9dffa1] text-gray-900 font-semibold rounded-full hover:bg-emerald-300 transition-colors duration-300 text-sm md:text-base">
                                {loading ? 'Sending...' : 'Send'}
                        </button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default ContactForm;

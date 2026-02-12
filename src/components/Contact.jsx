import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    seats: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formsubmit.co/ajax/sinharishik90@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Inquiry: ${formData.subject}`,
          'Full Name': formData.name,
          'Email': formData.email,
          'Phone': formData.phone,
          'Company': formData.company,
          'Subject': formData.subject,
          'Seats Required': formData.seats,
          'Message': formData.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', seats: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="px-4 sm:px-8 pb-12 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Card Container */}
        <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column: Contact Info */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-900">Get in Touch</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Have specific requirements? Let's talk. Fill in the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-4">
                <p className="text-sm font-medium flex items-center gap-3 text-gray-900">
                  <Phone className="w-4 h-4 text-brand-orange shrink-0" /> 
                  +91 (22) 4567-8900
                </p>
                <p className="text-sm font-medium flex items-center gap-3 text-gray-900">
                  <Mail className="w-4 h-4 text-brand-orange shrink-0" /> 
                  hello@shareloc.in
                </p>
                <p className="text-sm font-medium flex items-center gap-3 text-gray-900">
                  <MapPin className="w-4 h-4 text-brand-orange shrink-0" /> 
                  Maharashtra, India
                </p>
                <p className="text-sm font-medium flex items-center gap-3 text-gray-900">
                  <Clock className="w-4 h-4 text-brand-orange shrink-0" /> 
                  Mon-Sat, 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            {/* Right Column: The Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 bg-white rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 bg-white rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange text-gray-900"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    placeholder="+91 98765 43210" 
                    className="w-full px-4 py-3 bg-white rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Company / Organization</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company" 
                    className="w-full px-4 py-3 bg-white rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange text-gray-900"
                  />
                </div>
              </div>

              {/* Subject Select */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Subject</label>
                <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-white rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange text-gray-900 cursor-pointer">
                  <option value="" disabled>Select a subject</option>
                  <option>Membership Inquiry</option>
                  <option>Private Office Booking</option>
                  <option>Dedicated Desk Inquiry</option>
                  <option>Meeting Room Booking</option>
                  <option>Corporate / Team Plans</option>
                  <option>Technical Support</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Number of Seats */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Number of Seats Required</label>
                <input 
                  type="number" 
                  name="seats"
                  value={formData.seats}
                  onChange={handleChange}
                  min="1" 
                  max="100" 
                  placeholder="e.g. 5" 
                  className="w-full px-4 py-3 bg-white rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange text-gray-900"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  rows="4" 
                  placeholder="Tell us about your requirements..." 
                  className="w-full px-4 py-3 bg-white rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange text-gray-900 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className={`w-full px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center justify-center gap-2 ${
                  status === 'success' 
                    ? 'bg-green-500 text-white' 
                    : status === 'error' 
                      ? 'bg-red-500 text-white' 
                      : 'bg-brand-orange text-white hover:bg-orange-600'
                } ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status === 'sending' && <Loader2 className="w-4 h-4 animate-spin" />}
                {status === 'success' && <CheckCircle className="w-4 h-4" />}
                {status === 'idle' && 'Send Message'}
                {status === 'sending' && 'Sending...'}
                {status === 'success' && 'Message Sent Successfully!'}
                {status === 'error' && 'Failed to send. Try again.'}
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
import { Send, X } from 'lucide-react';
import React from 'react';
import { supabase } from '../supabaseClient';

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    
    // Prepare data for Supabase (clean, no form-name)
    const supabaseData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      details: formData.get('details'),
    };

    // Prepare data for Netlify (needs form-name)
    const netlifyData = {
      'form-name': 'booking',
      ...supabaseData
    };

    try {
      // 1. Submit to Supabase
      const { error: supabaseError } = await supabase
        .from('bookings')
        .insert([supabaseData]);

      if (supabaseError) {
        console.error('Supabase error:', supabaseError);
        throw supabaseError;
      }

      // 2. Submit to Netlify
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(netlifyData),
      });

      alert("Thanks for your interest! We'll be in touch soon.");
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-lg bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-8 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-100 mb-2">Let's Build Something.</h2>
          <p className="text-slate-400">Tell us about your project and we'll get back to you within 24 hours.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          name="booking"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="booking" />
          
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-slate-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              placeholder="John Doe"
              maxLength={100}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold text-slate-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              placeholder="john@example.com"
              maxLength={100}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-slate-300 mb-2">Phone (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              placeholder="+1 (555) 000-0000"
              maxLength={20}
            />
          </div>

          <div>
            <label htmlFor="details" className="block text-sm font-bold text-slate-300 mb-2">Project Details</label>
            <textarea
              id="details"
              name="details"
              rows="4"
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
              placeholder="Tell us a bit about what you're looking for..."
              maxLength={1000}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-800 disabled:cursor-not-allowed text-white rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 group"
          >
            {isSubmitting ? 'Sending...' : 'Send Request'}
            {!isSubmitting && <Send size={20} className="group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;


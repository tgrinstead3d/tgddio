import { X } from 'lucide-react';
import React from 'react';

const ManifestoModal = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto ${theme.cardBg} rounded-2xl shadow-2xl p-8 md:p-12 border ${theme.border} animate-fade-in`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-800 transition-colors"
        >
          <X size={24} className={theme.textMuted} />
        </button>

        <h2 className={`text-3xl font-bold ${theme.text} mb-8`}>Small Business deserves a big voice.</h2>

        <div className={`space-y-6 ${theme.textMuted} leading-relaxed text-lg`}>
          <p>
            We believe the internet is the great equalizer. It is the one place where a local shop should be able to stand toe-to-toe with a global giant. But somewhere along the way, the web lost its soul. It became a sea of sameness—cookie-cutter templates and big-corporate bloat.
          </p>
          <p className={`font-bold ${theme.text}`}>
            We are here to bring the personality back.
          </p>
          <p>
            We know that running a small business is lonely work. You have enough on your plate without stressing over code, pixels, and mobile responsiveness. We believe you shouldn't have to struggle with "easy" DIY builders that promise the world but deliver generic results.
          </p>
          <p>
            Our mission is simple: To take the weight off your shoulders. We build digital identities that don't just look "professional"—they look like you. We help you dress for the job you want, giving you the scale and polish of a major player without losing the heart of a small business.
          </p>
          <p className={`text-xl font-bold ${theme.accentText}`}>
            You focus on your dream. We’ll make sure the world sees it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManifestoModal;

import React, { useState } from 'react';
import { ARTICLES } from '../data/mockData';
import { Article } from '../types';
import { Clock, User, ArrowRight, Share2, Check, X, BookOpen } from 'lucide-react';

export const InsightsPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [copied, setCopied] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="bg-[#FAF8F5] text-slate-800">
      {/* Header */}
      <section className="bg-[#0B221E] text-white py-20 lg:py-24 border-b border-[#C2A268]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase block mb-3">
              Research & Commentary
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-white">
              News & Market Insights
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              In-depth analysis of talent dynamics, executive compensation, and regulatory evolution across Ireland, the UK, and European financial services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Articles List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-slate-200/90 hover:border-[#C2A268] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between p-8 group"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="text-[#C2A268] font-semibold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>

                <h2 className="text-xl font-heading font-medium text-[#0B221E] group-hover:text-[#C2A268] transition-colors leading-snug mb-3">
                  {article.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-slate-900">{article.author}</p>
                  <p className="text-slate-400">{article.authorRole}</p>
                </div>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="px-3.5 py-2 bg-[#0B221E] group-hover:bg-[#C2A268] text-white group-hover:text-[#0B221E] font-semibold uppercase tracking-wider transition-colors"
                >
                  Read
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription Block */}
        <div className="mt-20 bg-[#0B221E] text-white p-8 sm:p-12 border border-[#C2A268]/30 max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C2A268] uppercase block">
              Quarterly Briefing
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-medium text-white">
              Subscribe to Financial Talent Intelligence
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Receive our quarterly executive compensation reports, aircraft leasing commentary, and regulatory hiring trends directly in your inbox.
            </p>

            {isSubscribed ? (
              <div className="pt-4 text-[#C2A268] font-medium text-sm flex items-center justify-center gap-2">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>Thank you. You have been added to our quarterly briefing list.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="pt-4 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your corporate email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 text-xs bg-white text-slate-900 outline-none rounded-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#C2A268] hover:bg-[#e4cf9b] text-[#0B221E] font-semibold text-xs tracking-wider uppercase transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative bg-white text-slate-800 w-full max-w-3xl rounded-none shadow-2xl border border-[#C2A268]/30 max-h-[90vh] flex flex-col">
            <div className="bg-[#0B221E] text-white p-6 sm:p-8 flex items-start justify-between border-b border-[#C2A268]/30">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C2A268] uppercase mb-2">
                  <span>{selectedArticle.category}</span>
                  <span>·</span>
                  <span>{selectedArticle.date}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-heading font-medium tracking-tight text-white max-w-2xl">
                  {selectedArticle.title}
                </h2>
                <div className="mt-3 text-xs text-slate-300">
                  By {selectedArticle.author}, {selectedArticle.authorRole}
                </div>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-slate-400 hover:text-white p-1 rounded-sm transition-colors"
                aria-label="Close article"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <p className="text-base text-slate-700 font-medium italic border-l-2 border-[#C2A268] pl-4 py-1">
                {selectedArticle.excerpt}
              </p>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B221E] hover:text-[#C2A268] transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-700"
                >
                  Back to All Insights
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

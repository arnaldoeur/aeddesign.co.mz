
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

import FluidBackground from './components/FluidBackground';
import CustomCursor from './components/CustomCursor';
import AIChat from './components/AIChat';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useLanguage } from './context/LanguageContext';

// Lazy load pages for performance
const HomeView = React.lazy(() => import('./pages/Home'));
const ServicesView = React.lazy(() => import('./pages/Services'));
const PortfolioView = React.lazy(() => import('./pages/Portfolio'));
const ContactsNew = React.lazy(() => import('./pages/ContactsNew'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));

import { SERVICES, PRODUCTS_DATA, PORTFOLIO, LOGO_URL } from './data';

// Helper component for scrolling to top on route change
const ScrollToTop = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  return null;
};

// Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean, error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 p-6 text-center">
          <div>
            <h1 className="text-3xl font-bold text-red-600 mb-4">Something went wrong.</h1>
            <p className="text-gray-700 mb-4">Please try refreshing the page.</p>
            <div className="bg-white p-4 rounded shadow border border-red-200 text-left overflow-auto max-w-2xl mx-auto">
              <code className="text-red-500 text-sm whitespace-pre-wrap">
                {this.state.error?.toString()}
              </code>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}


const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center gap-4"
    >
      <img src={LOGO_URL} alt="AED Logo" className="w-32 md:w-40 h-auto object-contain" />
      <motion.div
        className="w-12 h-1 bg-[#F36F21] rounded-full"
        animate={{ width: ["0%", "100%", "0%"], x: ["-50%", "0%", "50%"] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  </motion.div>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTopWrapper />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loader" />
          ) : (
            <div className="relative min-h-screen text-[#1a0b2e] bg-slate-50 selection:bg-[#F36F21] selection:text-white cursor-auto">
              <CustomCursor />
              <FluidBackground />
              {/* <AIChat /> */}

              <Navbar />

              <main>
                <React.Suspense fallback={<LoadingScreen />}>
                  <AnimatePresence mode="wait">
                    <RoutesWithAnimation />
                  </AnimatePresence>
                </React.Suspense>
              </main>

              <Footer />
            </div>
          )}
        </AnimatePresence>
      </BrowserRouter>
    </ErrorBoundary>
  );
};


const ScrollToTopWrapper = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// We need a wrapper to use hooks like useNavigate and pass them as props if we don't want to rewrite the components immediately.
// Or we can just rewrite the components to use useNavigate. 
// I will adhere to the extracted components interfaces.
// Let's create a wrapper component for the routes.



const RoutesWithAnimation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleNavigate = (path: string) => {
    // Map legacy IDs to paths if needed, or expects paths
    // The old App.tsx used 'home', 'services', 'contacts'.
    // The components call onNavigate('services').
    // We need to map these to URLs.
    const pathMap: Record<string, string> = {
      'home': '/inicio',
      'services': '/servicos',
      'portfolio': '/portifolio',
      'contacts': '/contactos'
    };
    const target = pathMap[path] || path;
    navigate(target);
  };

  const handlePreview = (item: any) => {
    // For now, preview is inside the pages mostly or we can implement a global preview context?
    // In the original App.tsx, previewItem was global state in App. 
    // HomeView and ServicesView call onPreview.
    // If we move to routing, maybe we should remove the global preview modal or move it to a Context.
    // Or we can just pass a dummy function if we want to drop it, BUT the preview modal was a nice feature.
    // Let's see... HomeView has the Preview Modal inside it? 
    // No, App.tsx had the Preview Modal.
    // So if I removed Preview Modal from App.tsx, it's gone!
    // I should restore the Global Preview functionality.
    // I will add the Preview Modal output back to App.tsx or this wrapper.
    // Using a Context is best, but for speed, I'll use state in the Wrapper.
    console.log("Preview requested", item);
    setPreviewItem(item);
  };

  const [previewItem, setPreviewItem] = React.useState<any>(null);
  // Icons and motion are now imported at the top

  return (
    <>
      <Routes location={location}>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/home" element={<Navigate to="/inicio" replace />} />

        <Route
          path="/inicio"
          element={
            <HomeView
              onNavigate={handleNavigate}
              onPreview={handlePreview}
              services={SERVICES}
              portfolio={PORTFOLIO}
            />
          }
        />

        <Route
          path="/servicos"
          element={
            <ServicesView
              onNavigate={handleNavigate}
              onPreview={handlePreview}
              services={SERVICES}
              products={PRODUCTS_DATA}
            />
          }
        />

        <Route
          path="/portifolio"
          element={
            <PortfolioView
              portfolio={PORTFOLIO}
              onPreview={handlePreview}
            />
          }
        />

        <Route path="/contactos" element={<ContactsNew />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos" element={<TermsOfService />} />

        <Route path="*" element={<Navigate to="/inicio" replace />} />
      </Routes>

      {/* Global Preview Modal */}
      <AnimatePresence>
        {previewItem && (
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center pointer-events-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#1a0b2e]/80 backdrop-blur-sm pointer-events-auto"
              onClick={() => setPreviewItem(null)}
            />

            {/* Content Card */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="preview-title"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white w-full md:w-[600px] md:rounded-2xl rounded-t-2xl shadow-2xl relative pointer-events-auto overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="h-48 md:h-56 relative shrink-0">
                <img src={previewItem.image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] to-transparent opacity-80" />
                <button
                  onClick={() => setPreviewItem(null)}
                  className="absolute top-4 right-4 bg-[#1a0b2e]/20 hover:bg-[#1a0b2e]/50 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6">
                  {previewItem.category && (
                    <span className="text-[#F36F21] font-bold text-xs uppercase tracking-widest bg-white/10 backdrop-blur px-2 py-1 rounded mb-2 inline-block">
                      {t('previewText' in previewItem ? `services.${previewItem.id}.title` : `portfolio.${previewItem.id}.category`) /* Logic: Services don't display Category in Modal title usually? Original code used previewItem.category. But Services data has category. Translations have keys? I'll stick to original property usage if translated previously or use t() */}
                      {/* Original used previewItem.category directly. For Service, category is 'Criação', etc. For Portfolio 'MARKETING'.
                          If I want to translate, I should use t(`portfolio.${previewItem.id}.category`) or use the passed previewItem if it was ALREADY translated.
                          In Home.tsx, we pass `translatedService` and `translatedItem` (Portfolio) to onPreview.
                          So `previewItem` HAS translated title and category!
                          I don't need to re-translate basic props.
                          I ONLY need to deep-translate 'fullDescription' and 'features' which were NOT translated in Home.tsx.
                       */}
                      {previewItem.category}
                    </span>
                  )}
                  <h2 id="preview-title" className="text-3xl text-white font-heading font-bold">
                    {previewItem.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto">
                {/* Type Guard for ServiceItem vs PortfolioItem */}
                {'previewText' in previewItem ? (
                  // Service Preview
                  <>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {/* Use deep translation for full description */}
                      {t(`services.${previewItem.id}.fullDescription`)}
                    </p>
                    <div className="space-y-3 mb-8">
                      {/* Use deep translation for features or fallback to data */}
                      <h4 className="font-bold text-sm uppercase text-[#662D91] tracking-wider mb-2">{t('common.keyFeatures')}</h4>
                      {(t(`services.${previewItem.id}.features`) as unknown as string[]).map ?
                        (t(`services.${previewItem.id}.features`) as unknown as string[]).map((f: string, i: number) => (
                          <div key={i} className="flex items-center gap-3 text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#F36F21]" />
                            {f}
                          </div>
                        )) : null}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                      <button
                        onClick={() => { setPreviewItem(null); handleNavigate('services'); }}
                        className="flex-1 py-3 bg-[#1a0b2e] text-white rounded-lg font-bold hover:bg-[#662D91] transition-colors flex justify-center items-center gap-2"
                      >
                        {t('common.viewFullService')} <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          const message = encodeURIComponent(t('products.chatMessage').replace('{product}', previewItem.title));
                          window.open(`https://wa.me/258846109582?text=${message}`, '_blank');
                          setPreviewItem(null);
                        }}
                        className="flex-1 py-3 border-2 border-[#F36F21] text-[#F36F21] rounded-lg font-bold hover:bg-[#F36F21] hover:text-white transition-colors"
                      >
                        {t('modal.requestQuote')}
                      </button>
                    </div>
                  </>
                ) : (
                  // Portfolio Preview
                  <>
                    <p className="text-gray-600 text-lg mb-6">
                      {/* Reconstructed sentence or simple description */}
                      <span className="block mb-2">{t('common.excellenceIn')} <span className="text-[#662D91] font-bold">{previewItem.category}</span></span>
                      {/* Check if Client is valid to show */}
                      {previewItem.client && !['Confidencial', 'Particular'].includes(previewItem.client) && (
                        <span>{t('common.deliveredTo')} <span className="font-bold text-[#1a0b2e]">{previewItem.client}</span>.</span>
                      )}
                    </p>
                    {(!['Confidencial', 'Particular'].includes(previewItem.client) || previewItem.year) && (
                      <div className="bg-slate-50 p-4 rounded-lg mb-8 border border-gray-100">
                        {previewItem.client && !['Confidencial', 'Particular'].includes(previewItem.client) && (
                          <div className="flex justify-between text-sm text-gray-500 mb-1">
                            <span>{t('common.client')}</span>
                            <span className="font-bold text-[#1a0b2e]">{previewItem.client}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>{t('common.year')}</span>
                          <span className="font-bold text-[#1a0b2e]">{previewItem.year || '2024'}</span>
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => { setPreviewItem(null); handleNavigate('portfolio'); }}
                        className="w-full py-3 bg-[#662D91] text-white rounded-lg font-bold hover:bg-[#522475] transition-colors shadow-lg shadow-purple-500/20"
                      >
                        {t('common.viewPortfolio')}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};



export default App;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Clock, Send, Download, Map, MapPinned, Smartphone, AtSign } from 'lucide-react';
import ContactIcon from '../components/ContactIcon';

import { useLanguage } from '../context/LanguageContext';

const ContactsNew: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
    const { t } = useLanguage();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('success');
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-32 pb-20 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#662D91]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F36F21]/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#662D91] font-bold tracking-widest uppercase text-sm mb-2 block">{t('nav.contacts')}</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#662D91] mb-6">{t('contacts.title')}</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        {t('contacts.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Info Cards */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                            <ul className="space-y-8">
                                <li className="flex flex-row items-start text-left gap-4 group hover:bg-slate-50 p-4 rounded-xl transition-colors">
                                    <div className="shrink-0">
                                        <ContactIcon icon={Smartphone} size="md" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold mb-1">{t('contacts.callNow')}</p>
                                        <a href="tel:+258846109582" className="font-medium text-gray-700 hover:text-[#662D91] transition-colors block">+258 84 610 9582</a>
                                        <a href="tel:+258873794025" className="font-medium text-gray-700 hover:text-[#662D91] transition-colors block">+258 87 379 4025</a>
                                    </div>
                                </li>
                                <li className="flex flex-row items-start text-left gap-4 group hover:bg-slate-50 p-4 rounded-xl transition-colors">
                                    <div className="shrink-0">
                                        <ContactIcon icon={AtSign} size="md" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold mb-1">{t('contacts.email')}</p>
                                        <a href="mailto:info@aeddesign.co.mz" className="font-medium text-gray-700 hover:text-[#662D91] transition-colors block">info@aeddesign.co.mz</a>
                                        <a href="mailto:comercial@aeddesign.co.mz" className="font-medium text-gray-700 hover:text-[#662D91] transition-colors block">comercial@aeddesign.co.mz</a>
                                    </div>
                                </li>
                                <li className="flex flex-row items-start text-left gap-4 group hover:bg-slate-50 p-4 rounded-xl transition-colors">
                                    <div className="shrink-0">
                                        <ContactIcon icon={MapPinned} size="md" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold mb-1">{t('contacts.location')}</p>
                                        <a href="https://maps.app.goo.gl/somewhere" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-700 hover:text-[#F36F21] transition-colors block leading-relaxed">
                                            Av. do Trabalho, Prédio 24<br />Ao lado da Handling, Lichinga
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[#1a0b2e] text-white p-6 rounded-2xl shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <ContactIcon icon={Clock} size="md" color="text-[#F36F21]" />
                                <h3 className="font-bold text-xl">{t('common.openingHours')}</h3>
                            </div>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex justify-between">
                                    <span>{t('common.monFri')}</span>
                                    <span className="font-bold">08:00 — 18:00</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>{t('common.sat')}</span>
                                    <span className="font-bold">09:00 — 13:00</span>
                                </li>
                                <li className="flex justify-between text-gray-500">
                                    <span>{t('common.sun')}</span>
                                    <span>{t('common.closed')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
                            {formStatus === 'success' ? (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-heading font-bold text-[#662D91] mb-2">{t('contacts.successTitle')}</h3>
                                    <p className="text-gray-500 text-lg mb-8">
                                        {t('contacts.successMsg')}
                                    </p>
                                    <a href="https://wa.me/258846109582" target="_blank" className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#20bd5a] transition-colors">
                                        Conversar agora no WhatsApp
                                    </a>
                                    <button onClick={() => setFormStatus('idle')} className="block mx-auto mt-6 text-sm text-gray-400 hover:text-[#662D91]">
                                        Enviar novo pedido
                                    </button>
                                </motion.div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">{t('contacts.formName')} *</label>
                                            <input required type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#F36F21] focus:outline-none focus:ring-1 focus:ring-[#F36F21] transition-all" placeholder={t('contacts.formNamePlaceholder')} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">{t('contacts.formCompany')}</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#F36F21] focus:outline-none focus:ring-1 focus:ring-[#F36F21] transition-all" placeholder={t('contacts.formCompanyPlaceholder')} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">{t('contacts.formPhone')} *</label>
                                            <input required type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#F36F21] focus:outline-none focus:ring-1 focus:ring-[#F36F21] transition-all" placeholder={t('contacts.formPhonePlaceholder')} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">{t('contacts.formEmail')} *</label>
                                            <input required type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#F36F21] focus:outline-none focus:ring-1 focus:ring-[#F36F21] transition-all" placeholder={t('contacts.formEmailPlaceholder')} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">{t('contacts.formService')} *</label>
                                            <select required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#F36F21] focus:outline-none focus:ring-1 focus:ring-[#F36F21]">
                                                <option value="">{t('contacts.select')}</option>
                                                <option value="Design Gráfico">{t('contacts.servicesOptions.graphicDesign')}</option>
                                                <option value="Impressão Digital">{t('contacts.servicesOptions.digitalPrint')}</option>
                                                <option value="Livros de Facturação">{t('contacts.servicesOptions.invoiceBooks')}</option>
                                                <option value="Estampagem">{t('contacts.servicesOptions.stamping')}</option>
                                                <option value="Bordados">{t('contacts.servicesOptions.embroidery')}</option>
                                                <option value="Brindes">{t('contacts.servicesOptions.gifts')}</option>
                                                <option value="Outros">{t('contacts.servicesOptions.others')}</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">{t('contacts.deadline')}</label>
                                            <input type="date" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#F36F21] focus:outline-none focus:ring-1 focus:ring-[#F36F21]" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">{t('contacts.formDesc')} *</label>
                                        <textarea required rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#F36F21] focus:outline-none focus:ring-1 focus:ring-[#F36F21]" placeholder={t('contacts.formDescPlaceholder')}></textarea>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">{t('contacts.attachFile')}</label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#F36F21] transition-colors cursor-pointer bg-gray-50 group">
                                            <Download className="w-8 h-8 mx-auto text-gray-400 group-hover:text-[#F36F21] mb-2 transition-colors" />
                                            <p className="text-gray-500 text-sm">{t('contacts.clickToUpload')}</p>
                                        </div>
                                        <p className="text-xs text-gray-400 mt-2 flex items-center gap-1"><Phone className="w-3 h-3" /> {t('contacts.whatsappHint')}</p>
                                    </div>

                                    <button className="w-full py-4 bg-gradient-to-r from-[#F36F21] to-[#662D91] text-white font-bold rounded-xl text-lg hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                        <Send className="w-5 h-5" /> {t('contacts.btnSend')}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 h-[400px] relative mt-16">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.562795620494!2d35.24266250000001!3d-13.315228999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18e08bac7dc5e941%3A0xcd82a99116bf9337!2sAED%20DESIGN%20%26%20SERVI%C3%87OS%20SU%20LDA!5e0!3m2!1sen!2sin!4v1767696613249!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="AED Design Location"
                        className="filter grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                    <div className="absolute bottom-6 left-6">
                        <a
                            href="https://share.google/fJmJiW67X9BB874pI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-[#1a0b2e] px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-[#F36F21] hover:text-white transition-colors"
                        >
                            <Map className="w-4 h-4" /> {t('contacts.getDirections')}
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactsNew;

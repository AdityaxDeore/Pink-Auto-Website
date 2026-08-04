import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/ui/FadeIn';

const steps = [
  { id: 1, title: 'Personal Details' },
  { id: 2, title: 'Vehicle Info' },
  { id: 3, title: 'Documents' },
  { id: 4, title: 'Submit' }
];

export default function DriverRegistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <section className="section page-header-section">
        <div className="container">
          {/* Removed large text block so form appears without scrolling */}
          <div className="grid-2 items-start gap-10 md:gap-16">
            
            {/* ── Benefits Sidebar ── */}
            <FadeIn direction="left">
              <div style={{ position: 'sticky', top: '100px' }}>
                <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Why Join Us?</span>
                <h2 className="text-h2" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                  Benefits of Being a <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Pink Auto Driver</span>
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[
                    { title: 'Better Earnings', desc: 'Keep 100% of your metered fare. Zero commission on street pickups.' },
                    { title: 'Flexible Hours', desc: 'You decide when you want to work. Balance work and family life.' },
                    { title: 'Safety First', desc: 'Emergency SOS button, GPS tracking, and continuous support.' },
                    { title: 'Health Insurance', desc: 'Accidental and health insurance coverage for you and your family.' },
                    { title: 'Professional Training', desc: 'Free training in self-defense, customer service, and vehicle maintenance.' },
                    { title: 'More Rides, More Benefits', desc: 'Earn rewards, priority assignments, and performance bonuses as you complete more rides.' },
                  ].map((benefit, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                      <div>
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 600 }}>{benefit.title}</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* ── Registration Form ── */}
            <FadeIn direction="right">
              <div className="card" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
                {isSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                    <h3 className="text-h3">Application Submitted!</h3>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
                      Thank you for applying to join Pink Auto. Our team will review your application and contact you within 48 hours for the next steps.
                    </p>
                    <button onClick={() => { setIsSubmitted(false); setCurrentStep(1); }} className="btn btn-primary" style={{ marginTop: '2rem' }}>
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-h3" style={{ marginBottom: '2rem', textAlign: 'center' }}>Driver Application Form</h3>
                    
                    {/* Step Indicator */}
                    <div className="steps">
                      {steps.map((step, index) => (
                        <div key={step.id} style={{ display: 'flex', alignItems: 'center' }}>
                          <div className={`step-item ${currentStep === step.id ? 'active' : currentStep > step.id ? 'completed' : ''}`}>
                            <div className="step-circle">
                              {currentStep > step.id ? '✓' : step.id}
                            </div>
                            <span className="step-label" style={{ display: 'none' }}>{step.title}</span>
                          </div>
                          {index < steps.length - 1 && (
                            <div className={`step-line ${currentStep > step.id ? 'active' : ''}`} />
                          )}
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSubmit}>
                      <AnimatePresence mode="wait">
                        {currentStep === 1 && (
                          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <div className="form-group">
                              <label className="form-label">Full Name</label>
                              <input type="text" className="form-input" placeholder="Enter your full name" required />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Phone Number</label>
                              <input type="tel" className="form-input" placeholder="+91" required />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Date of Birth</label>
                              <input type="date" className="form-input" required />
                            </div>
                            <div className="form-group">
                              <label className="form-label">City</label>
                              <input type="text" className="form-input" placeholder="Enter your city" required />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Taluka</label>
                              <input type="text" className="form-input" placeholder="Enter your taluka" required />
                            </div>
                            <div className="form-group">
                              <label className="form-label">District</label>
                              <input type="text" className="form-input" placeholder="Enter your district" required />
                            </div>
                          </motion.div>
                        )}

                        {currentStep === 2 && (
                          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <div className="form-group">
                              <label className="form-label">Do you own an auto-rickshaw?</label>
                              <select className="form-select">
                                <option>Yes, I own one</option>
                                <option>No, I rent one</option>
                                <option>No, I need one provided</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label className="form-label">Driving Experience (Years)</label>
                              <input type="number" className="form-input" placeholder="e.g. 3" required />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Vehicle Registration Number (If applicable)</label>
                              <input type="text" className="form-input" placeholder="MH 09 XX XXXX" />
                            </div>
                          </motion.div>
                        )}

                        {currentStep === 3 && (
                          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                              Please upload clear images of the following documents. Max size 5MB per file.
                            </p>
                            <div className="form-group">
                              <label className="form-label">Aadhaar Card (Front & Back)</label>
                              <input type="file" className="form-input" accept="image/*,.pdf" required />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Driving License</label>
                              <input type="file" className="form-input" accept="image/*,.pdf" required />
                            </div>
                            <div className="form-group">
                              <label className="form-label">Recent Passport Size Photo</label>
                              <input type="file" className="form-input" accept="image/*" required />
                            </div>
                          </motion.div>
                        )}

                        {currentStep === 4 && (
                          <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <div style={{ background: 'var(--pink-50)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', marginBottom: '1.5rem' }}>
                              <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'var(--pink-primary)' }}>Declaration</h4>
                              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                I hereby declare that all the information provided above is true and correct to the best of my knowledge. I understand that my background will be verified by local police authorities before I can join Pink Auto.
                              </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                              <input type="checkbox" id="agree" required style={{ width: 18, height: 18, accentColor: 'var(--pink-primary)' }} />
                              <label htmlFor="agree" style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>I agree to the Terms & Conditions</label>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem' }}>
                        {currentStep > 1 ? (
                          <button type="button" onClick={prevStep} className="btn btn-ghost">Back</button>
                        ) : (
                          <div />
                        )}
                        
                        {currentStep < 4 ? (
                          <button type="button" onClick={nextStep} className="btn btn-primary">Next Step →</button>
                        ) : (
                          <button type="submit" className="btn btn-primary">Submit Application</button>
                        )}
                      </div>
                    </form>
                  </>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

import React, { useState } from 'react';
import './StaticPages.css';
import './CheckUser.css';
import { LandingHeader } from './components/LandingHeader';
import { LandingFooter } from './components/LandingFooter';

interface CheckUserResponse {
  exists: boolean;
  message: string;
}

export const CheckUser: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<CheckUserResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';
      const res = await fetch(`${baseUrl}/auth/check-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      
      if (res.ok) {
        setResponse(data);
      } else {
        setError(data.message || 'Failed to check user existence');
      }
    } catch (err) {
      setError('An error occurred while checking user existence');
      console.error('Error checking user:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="landing-page static-page">
      <LandingHeader />
      <main className="static-page-content">
        <div className="static-page-container" style={{ maxWidth: '40rem' }}>
          <h1 className="static-page-title">Check Your Account</h1>
          <p className="static-page-date" style={{ marginBottom: '2rem' }}>
            Verify if you have an existing account with us
          </p>

          <section className="static-section">
            <div className="check-user-form-wrapper">
              <p style={{ color: '#b8c5d6', marginBottom: '1.5rem' }}>
                Enter your email address to check if you're already registered in our system.
                This will help you determine if you need to create a new account or can log in directly.
              </p>

              <form onSubmit={handleSubmit} className="check-user-form">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>

                <button
                  type="submit"
                  className="form-submit-btn"
                  disabled={loading || !email}
                >
                  {loading ? 'Checking...' : 'Check Account'}
                </button>
              </form>

              {response && (
                <div className={`result-box ${response.exists ? 'result-success' : 'result-info'}`}>
                  <div className="result-icon">
                    {response.exists ? '✓' : 'ℹ'}
                  </div>
                  <div className="result-content">
                    <h3 className="result-title">
                      {response.exists ? 'Account Found' : 'No Account Found'}
                    </h3>
                    <p className="result-message">{response.message}</p>
                    {response.exists && (
                      <p className="result-hint">
                        You can proceed to log in with this email address.
                      </p>
                    )}
                    {!response.exists && (
                      <p className="result-hint">
                        You may need to create a new account to get started.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {error && (
                <div className="result-box result-error">
                  <div className="result-icon">✕</div>
                  <div className="result-content">
                    <h3 className="result-title">Error</h3>
                    <p className="result-message">{error}</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
};

export default CheckUser;

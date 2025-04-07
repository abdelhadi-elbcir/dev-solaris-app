
"use client";   
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Join() {
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAvailable, setIsAvailable] = useState(null);

  const handleZipCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setZipCode(value.slice(0, 5));
    setError('');
  };

  const checkAvailability = (e) => {
    e.preventDefault();
    
    if (zipCode.length !== 5) {
      setError('Please enter a valid 5-digit zip code');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API check
    setTimeout(() => {
      // For demo purposes: odd zip codes are available, even ones are not
      const available = parseInt(zipCode) % 2 === 1;
      setIsAvailable(available);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          {isAvailable === null ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Check Availability</h1>
                <p className="text-gray-600">
                  Enter your zip code to see if Solaris is available in your area.
                </p>
              </div>

              <form onSubmit={checkAvailability} className="space-y-6">
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                    Zip Code
                  </label>
                  <input
                    id="zipCode"
                    type="text"
                    value={zipCode}
                    onChange={handleZipCodeChange}
                    placeholder="Enter your 5-digit zip code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-green-800 outline-none transition"
                    maxLength={5}
                  />
                  {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-green-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-900 transition flex justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    'Check Availability'
                  )}
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  This check will tell you if our services are available in your area. 
                  Your information is kept private in accordance with our{' '}
                  <Link href="/privacy" className="text-green-800 hover:underline">
                    privacy policy
                  </Link>.
                </p>
              </div>
            </>
          ) : isAvailable ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Good News!</h2>
              <p className="text-gray-600 mb-8">
                Solaris is available in your area. We're ready to help you transition to clean energy.
              </p>
              <Link href="/sign-up" className="inline-block bg-green-800 text-white py-3 px-8 rounded-lg font-medium hover:bg-green-900 transition">
                Continue to Sign Up
              </Link>
              <p className="mt-4 text-sm text-gray-500">
                Or call us at <a href="tel:+18005551234" className="text-green-800 hover:underline">1-800-555-1234</a>
              </p>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-gray-600 mb-8">
                We're not in your area yet, but we're expanding quickly. Join our waitlist to be notified when we arrive.
              </p>
              <Link href="/waitlist" className="inline-block bg-green-800 text-white py-3 px-8 rounded-lg font-medium hover:bg-green-900 transition">
                Join Waitlist
              </Link>
              <button 
                onClick={() => setIsAvailable(null)} 
                className="block mx-auto mt-4 text-green-800 hover:underline"
              >
                Try another zip code
              </button>
            </div>
          )}
        </div>
      </main>

    </div>
  );
}
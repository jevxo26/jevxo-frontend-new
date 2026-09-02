import React from "react";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Cookies Policy</h1>
        
        <div className="space-y-6 text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. What Are Cookies</h2>
            <p>Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third party to recognize you and make your next visit easier and the Service more useful to you.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. How JEVXO Uses Cookies</h2>
            <p>When you use and access our website, we may place a number of cookies files in your web browser. We use cookies to enable certain functions of the Service, to provide analytics, and to store your preferences.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Third-Party Cookies</h2>
            <p>In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service and deliver advertisements on and through the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. What Are Your Choices</h2>
            <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

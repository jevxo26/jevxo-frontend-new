import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
        
        <div className="space-y-6 text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Introduction</h2>
            <p>Welcome to JEVXO. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Services</h2>
            <p>JEVXO provides UI/UX design, web development, app development, and branding services. We reserve the right to modify or discontinue any part of our services with or without notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Intellectual Property</h2>
            <p>All content, designs, code, and materials provided during the course of our services remain the intellectual property of JEVXO until full payment is received, at which point rights are transferred as agreed upon in the specific project contract.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Limitation of Liability</h2>
            <p>JEVXO shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

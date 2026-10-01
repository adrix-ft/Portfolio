import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', maxWidth: '600px', margin: '40px auto', backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
    
    {/* Header */}
    <div style={{ backgroundColor: '#0f172a', padding: '32px 24px', textAlign: 'center' }}>
      <h1 style={{ color: '#ffffff', fontSize: '28px', margin: '0', fontWeight: '700', letterSpacing: '-0.5px' }}>
        New Project Inquiry
      </h1>
      <p style={{ color: '#94a3b8', fontSize: '16px', margin: '8px 0 0 0' }}>
        Someone wants to work with you!
      </p>
    </div>

    {/* Body */}
    <div style={{ padding: '32px 24px' }}>
      
      {/* Sender Info Card */}
      <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #3b82f6', marginBottom: '24px' }}>
        <p style={{ margin: '0 0 12px 0', fontSize: '16px', color: '#334155' }}>
          <strong style={{ color: '#0f172a' }}>Name:</strong> {fullName}
        </p>
        <p style={{ margin: '0', fontSize: '16px', color: '#334155' }}>
          <strong style={{ color: '#0f172a' }}>Email:</strong> <a href={`mailto:${email}`} style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: '500' }}>{email}</a>
        </p>
      </div>

      {/* Message Content */}
      <h2 style={{ fontSize: '18px', color: '#0f172a', margin: '0 0 12px 0', fontWeight: '600' }}>
        Their Message:
      </h2>
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', color: '#475569', fontSize: '16px', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
        {message}
      </div>

      {/* CTA */}
      <div style={{ marginTop: '32px', textAlign: 'center' }}>
        <a href={`mailto:${email}`} style={{ backgroundColor: '#3b82f6', color: '#ffffff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', fontSize: '16px', display: 'inline-block' }}>
          Reply to {fullName}
        </a>
      </div>
    </div>

    {/* Footer */}
    <div style={{ backgroundColor: '#f1f5f9', padding: '24px', textAlign: 'center', borderTop: '1px solid #e2e8f0' }}>
      <p style={{ margin: '0', color: '#64748b', fontSize: '13px' }}>
        This inquiry was sent from your personal portfolio website.
      </p>
      <p style={{ margin: '8px 0 0 0', color: '#94a3b8', fontSize: '12px' }}>
        © {new Date().getFullYear()} Adarsh. All rights reserved.
      </p>
    </div>
  </div>
);

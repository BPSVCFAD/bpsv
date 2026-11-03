import Link from 'next/link'
import { announcements } from '../../lib/announcements'

export const metadata = {
  title: 'Announcements — BPSV',
  description: 'Latest news, calls for proposals, and updates from Beyond Purpose Social Ventures.',
  openGraph: {
    title: 'Announcements — Beyond Purpose Social Ventures',
    description: 'Latest news, calls for proposals, and updates from Beyond Purpose Social Ventures.',
    url: 'https://beyondpurpose.in/announcements',
    siteName: 'Beyond Purpose Social Ventures',
    images: [{ url: '/assets/img/empower.png', width: 1200, height: 630, alt: 'BPSV Announcements' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Announcements — Beyond Purpose Social Ventures',
    description: 'Latest news, calls for proposals, and updates from Beyond Purpose Social Ventures.',
    images: ['/assets/img/empower.png'],
  },
}

export default function AnnouncementsPage() {
  return (
    <>
      <style>{`
        /* ── Announcements Hero ── */
        .ann-hero {
          position: relative;
          background: linear-gradient(
              135deg,
              rgba(8, 42, 58, 0.96) 0%,
              rgba(21, 91, 104, 0.93) 55%,
              rgba(43, 164, 170, 0.86) 100%
            ),
            url("/assets/img/empower.png") center / cover no-repeat;
          padding: 140px 0 80px;
          color: #fff;
        }
        .ann-hero .breadcrumb-nav {
          font-size: 13px;
          letter-spacing: 0.04em;
          margin-bottom: 20px;
          opacity: 0.85;
        }
        .ann-hero .breadcrumb-nav a {
          color: #80e5e1;
          text-decoration: none;
        }
        .ann-hero .breadcrumb-nav a:hover {
          text-decoration: underline;
        }
        .ann-hero .breadcrumb-nav .sep {
          margin: 0 8px;
          opacity: 0.6;
        }
        .ann-hero h1 {
          font-size: 46px;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 16px;
        }
        .ann-hero h1 strong {
          color: #80e5e1;
          font-weight: 800;
        }
        .ann-hero p {
          font-size: 17px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.75;
          max-width: 600px;
          margin: 0;
        }
        @media (max-width: 767px) {
          .ann-hero {
            padding: 110px 0 60px;
          }
          .ann-hero h1 {
            font-size: 30px;
          }
        }

        /* ── Announcements List ── */
        .announcements-list-area {
          padding: 72px 0 80px;
          background: #f7fbfb;
        }
        .ann-section-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }
        .ann-section-label .line {
          display: inline-block;
          width: 32px;
          height: 2px;
          background: #2fa7a3;
          border-radius: 2px;
        }
        .ann-section-label .text {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #2fa7a3;
        }
        .ann-section-heading {
          font-size: 32px;
          font-weight: 700;
          color: #0d2d3f;
          line-height: 1.3;
          margin-bottom: 8px;
        }
        .ann-section-heading strong {
          color: #2fa7a3;
        }
        .ann-section-sub {
          font-size: 15px;
          color: #5a7080;
          margin-bottom: 48px;
          line-height: 1.7;
        }

        /* ── Announcement Card ── */
        .announcement-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(13, 45, 63, 0.09);
          margin-bottom: 36px;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .announcement-card:hover {
          box-shadow: 0 10px 36px rgba(13, 45, 63, 0.15);
          transform: translateY(-3px);
        }

        /* Thumbnail banner */
        .ann-card-thumb {
          position: relative;
          height: 200px;
          background: linear-gradient(
            135deg,
            #0d2d3f 0%,
            #1a5a68 55%,
            #2fa7a3 100%
          );
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 24px 28px;
          overflow: hidden;
        }
        .ann-card-thumb::before {
          content: "";
          position: absolute;
          top: -30px;
          right: -30px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
        }
        .ann-card-thumb::after {
          content: "";
          position: absolute;
          bottom: -50px;
          right: 40px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(43, 164, 170, 0.15);
        }
        .ann-card-thumb .thumb-icon {
          font-size: 40px;
          color: rgba(255, 255, 255, 0.18);
          position: absolute;
          top: 24px;
          right: 28px;
          z-index: 1;
        }
        .ann-cat-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.35);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 999px;
          position: relative;
          z-index: 2;
        }

        /* Card body */
        .ann-card-body {
          padding: 28px 32px 32px;
        }
        .ann-card-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 14px;
          font-size: 13px;
          color: #7a9aaa;
        }
        .ann-card-meta i {
          color: #2fa7a3;
          margin-right: 5px;
        }
        .ann-card-title {
          font-size: 22px;
          font-weight: 700;
          color: #0d2d3f;
          line-height: 1.35;
          margin-bottom: 14px;
        }
        .ann-card-desc {
          font-size: 15px;
          color: #4a6070;
          line-height: 1.75;
          margin-bottom: 24px;
        }

        /* Key Details */
        .ann-key-details {
          background: #f4fbfb;
          border: 1px solid #d4eeed;
          border-radius: 10px;
          padding: 18px 22px;
          margin-bottom: 26px;
        }
        .ann-key-details h5 {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #2fa7a3;
          margin-bottom: 14px;
        }
        .ann-key-details ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .ann-key-details ul li {
          display: flex;
          gap: 8px;
          font-size: 13.5px;
          color: #2d4a58;
          padding: 6px 0;
          border-bottom: 1px solid rgba(212, 238, 237, 0.7);
          line-height: 1.5;
        }
        .ann-key-details ul li:last-child {
          border-bottom: none;
        }
        .ann-key-details .detail-label {
          font-weight: 600;
          min-width: 160px;
          flex-shrink: 0;
          color: #1a5a68;
        }
        .ann-key-details .detail-value {
          color: #4a6070;
        }

        /* Actions */
        .ann-card-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }
        .ann-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #1f8f95 0%, #2fa7a3 100%);
          color: #fff;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.02em;
          padding: 11px 22px;
          border-radius: 8px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 6px 18px rgba(47, 167, 163, 0.32);
        }
        .ann-btn-primary:hover {
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(47, 167, 163, 0.42);
          text-decoration: none;
        }
        .ann-btn-primary i {
          font-size: 15px;
        }

        /* Empty state */
        .ann-empty {
          text-align: center;
          padding: 64px 0;
          color: #7a9aaa;
          font-size: 15px;
        }

        @media (max-width: 767px) {
          .ann-card-body {
            padding: 22px 20px 26px;
          }
          .ann-card-title {
            font-size: 18px;
          }
          .ann-key-details .detail-label {
            min-width: 120px;
          }
        }
      `}</style>

      {/* Hero */}
      <div className="ann-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="breadcrumb-nav">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <span>Announcements</span>
              </div>
              <h1>
                Latest <strong>Announcements</strong>
              </h1>
              <p>
                News, calls for proposals, and updates from Beyond Purpose Social
                Ventures.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Announcements List */}
      <div className="announcements-list-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="ann-section-label">
                <span className="line"></span>
                <span className="text">Updates</span>
              </div>
              <h2 className="ann-section-heading">
                Open <strong>Calls &amp; News</strong>
              </h2>
              <p className="ann-section-sub">
                Stay informed about BPSV's open calls, new initiatives, and
                organisational updates.
              </p>
            </div>
          </div>

          {announcements.length === 0 ? (
            <div className="row">
              <div className="col-md-8 col-md-offset-2 ann-empty">
                <i className="fa fa-bell-o" style={{ fontSize: 36, marginBottom: 16, display: 'block' }}></i>
                No announcements yet. Check back soon.
              </div>
            </div>
          ) : (
            announcements.map((a) => (
              <div className="row" key={a.id}>
                <div className="col-md-10 col-md-offset-1">
                  <div className="announcement-card">
                    {/* Thumbnail Banner */}
                    <div className="ann-card-thumb">
                      <i className="fa fa-file-text-o thumb-icon"></i>
                      <span className="ann-cat-badge">{a.category}</span>
                    </div>

                    {/* Body */}
                    <div className="ann-card-body">
                      <div className="ann-card-meta">
                        <span>
                          <i className="fa fa-calendar"></i>
                          {a.dateDisplay}
                        </span>
                      </div>

                      <h3 className="ann-card-title">{a.title}</h3>
                      <p className="ann-card-desc">{a.description}</p>

                      {/* Key Details */}
                      {a.keyDetails && a.keyDetails.length > 0 && (
                        <div className="ann-key-details">
                          <h5>Key Details</h5>
                          <ul>
                            {a.keyDetails.map((d, i) => (
                              <li key={i}>
                                <span className="detail-label">{d.label}</span>
                                <span className="detail-value">{d.value}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="ann-card-actions">
                        <a
                          href={a.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ann-btn-primary"
                        >
                          <i className="fa fa-file-pdf-o"></i>
                          View / Download PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

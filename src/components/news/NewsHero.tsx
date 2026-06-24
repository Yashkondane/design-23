import React from 'react'
import Link from 'next/link'
interface NewsHeroProps {
  article: {
    title: string
    category: string
    date: string
    readTime: string
    author: string
    authorRole: string
    imgUrl: string
  }
}

export const NewsHero: React.FC<NewsHeroProps> = ({ article }) => {
  return (
    <div className="article-hero">
      <div className="hero-inner">
        <div className="article-tags">
          <Link href="/news" className="tag-industry" aria-label={`View all ${article.category} news`}>
            {article.category}
          </Link>
          <span className="tag-fresh">
            <span className="tag-fresh-dot"></span>Latest — Updated {article.date}
          </span>
        </div>

        <h1 className="article-h1">{article.title}</h1>

        <div className="article-meta" aria-label="Article information">
          <div className="meta-analyst">
            <div className="meta-avatar" aria-hidden="true">
              {article.author.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </div>
            <div className="meta-analyst-info">
              <strong>{article.author}</strong>
              <span>{article.authorRole}</span>
            </div>
          </div>
          <div className="meta-divider" aria-hidden="true"></div>
          <div className="meta-item">
            <span className="meta-item-icon" aria-hidden="true">📅</span>
            <span>Published: <strong>{article.date}</strong></span>
          </div>
          <div className="meta-item">
            <span className="meta-item-icon" aria-hidden="true">⏱</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Stat Widget */}
        <div className="stat-widget" aria-label="Market key statistics">
          <div className="sw-card">
            <div className="sw-label">2025 Base Year</div>
            <div className="sw-value">$500.5B</div>
            <div className="sw-sublabel">Global Market Size</div>
          </div>
          <div className="sw-card">
            <div className="sw-label">2026 Estimate</div>
            <div className="sw-value">$616.1B</div>
            <div className="sw-sublabel">Current Year Value</div>
          </div>
          <div className="sw-card">
            <div className="sw-label">2035 Forecast</div>
            <div className="sw-value">$3,910.7B</div>
            <div className="sw-sublabel">10-Year Projection</div>
          </div>
          <div className="sw-card">
            <div className="sw-label">CAGR 2026–2035</div>
            <div className="sw-value">23.1%</div>
            <div className="sw-sublabel">Compound Annual Growth</div>
          </div>
        </div>

        {/* Share + CTA */}
        <div className="article-actions">
          <div className="share-row" aria-label="Share this article">
            <span className="share-label">Share:</span>
            <a href="#" className="share-btn share-btn--li" rel="noopener" target="_blank" aria-label="Share on LinkedIn">
              LinkedIn
            </a>
            <a href="#" className="share-btn share-btn--x" rel="noopener" target="_blank" aria-label="Share on Twitter">𝕏 Tweet</a>
            <a href="#" className="share-btn share-btn--em" aria-label="Share via Email">📧 Email</a>
          </div>
        </div>
      </div>
    </div>
  )
}

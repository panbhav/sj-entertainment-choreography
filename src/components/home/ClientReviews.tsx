import { Quote, Heart, Star } from 'lucide-react';
import { getPublishedTestimonials, type Testimonial } from '@/content/testimonials';
import './ClientReviews.css';

function ReviewCard({ review }: { review: Testimonial }) {
  return (
    <figure className="client-review-card">
      <div className="client-review-top"><Quote size={25} aria-hidden="true" /><span>{review.source} review</span></div>
      <span className="client-review-stars" role="img" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }, (_, i) => <Star key={i} size={14} fill="currentColor" aria-hidden="true" />)}
      </span>
      <blockquote>{review.excerpt}</blockquote>
      <details className="client-review-full">
        <summary aria-label={`Read full review by ${review.clientNames}`}>Read full review <span aria-hidden="true">+</span></summary>
        <p>{review.quote}</p>
      </details>
      <figcaption><span>{review.clientNames}</span><small>{[review.eventType, review.eventCity].filter(Boolean).join(' · ')}</small></figcaption>
    </figure>
  );
}

export default function ClientReviews() {
  const reviews = getPublishedTestimonials();
  if (!reviews.length) return null;
  return (
    <section className="client-reviews" aria-labelledby="client-reviews-title">
      <div className="site-container">
        <div className="client-reviews-heading">
          <div>
            <p className="eyebrow"><Heart size={14} aria-hidden="true" /> CLIENT REVIEWS</p>
            <h2 id="client-reviews-title">Beyond the dance.<br /><em>The words we treasure.</em></h2>
          </div>
          <p>Words from the couples and families who shared their celebrations with SJ. Selected reviews from our Google profile.</p>
        </div>
        <div className="client-reviews-grid">{reviews.slice(0, 3).map(review => <ReviewCard review={review} key={review.id} />)}</div>
        {reviews.length > 3 && <details className="client-reviews-more">
          <summary>More client reviews <span>{reviews.length - 3} more <span aria-hidden="true">+</span></span></summary>
          <div className="client-reviews-grid">{reviews.slice(3).map(review => <ReviewCard review={review} key={review.id} />)}</div>
        </details>}
      </div>
    </section>
  );
}

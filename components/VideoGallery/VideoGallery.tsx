'use client';

import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './VideoGallery.scss';

interface VideoItem {
  thumb: string;
  title: string;
  type: string;
  duration: string;
}

const videoItems: VideoItem[] = [
  {
    thumb: 'https://placehold.co/500x280/3D1010/A08060?text=Rescue+Documentary',
    title: 'The Midnight Rescue — Saving Lakshmi',
    type: 'Documentary',
    duration: '12 min',
  },
  {
    thumb: 'https://placehold.co/500x280/301010/A08060?text=Day+in+the+Life',
    title: 'A Day at Suri Prem Gaushala',
    type: 'Vlog',
    duration: '8 min',
  },
  {
    thumb: 'https://placehold.co/500x280/280808/A08060?text=Community+Impact',
    title: 'How Your Donations Change Lives',
    type: 'Impact Story',
    duration: '5 min',
  },
];

export default function VideoGallery() {
  return (
    <section className="video-gallery" id="videos">
      <Reveal variant="fade-up">
        <div className="section-header">
          <div className="section-overline">Watch &amp; Share</div>
          <h2>Videos from the Gaushala</h2>
          <p>
            Watch our rescue stories, daily operations, and community events. Subscribe to stay
            connected.
          </p>
          <div className="section-divider video-gallery__divider" />
        </div>
      </Reveal>

      <StaggerContainer
        className="video-gallery__grid"
        staggerDelay={0.1}
        initialDelay={0.05}
      >
        {videoItems.map((item) => (
          <StaggerItem key={item.title} variant="zoom-in" className="video-gallery__card">
            <div className="video-gallery__thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.thumb} alt={item.title} />
              <div className="video-gallery__overlay" />
              <button className="video-gallery__play" aria-label={`Play: ${item.title}`}>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M8 5.14v14l11-7-11-7z" />
                </svg>
              </button>
            </div>
            <div className="video-gallery__body">
              <h3 className="video-gallery__title">{item.title}</h3>
              <p className="video-gallery__meta">
                <span className="video-gallery__tag">{item.type}</span>
                <span className="video-gallery__dot">·</span>
                {item.duration}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

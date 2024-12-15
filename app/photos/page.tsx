import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "@/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section className='mb-20'>
      <h1 className='mb-8 text-2xl font-medium tracking-tight'>Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: '/photos/retro-tennis-court-1.jpg',
            alt: 'tennis',
            href: 'https://thientran.io',
          },
          {
            src: '/photos/retro-tennis-court-2.jpg',
            alt: 'tennis',
            href: 'https://thientran.io',
          },
          {
            src: '/photos/retro-tennis-court-3.jpg',
            alt: 'tennis',
            href: 'https://thientran.io',
          },
          {
            src: '/photos/retro-tennis-court-4.jpg',
            alt: 'tennis',
            href: 'https://thientran.io',
          },
          {
            src: '/photos/retro-tennis-court-5.jpg',
            alt: 'tennis',
            href: 'https://thientran.io',
          },
          {
            src: '/photos/retro-tennis-court-6.jpg',
            alt: 'tennis',
            href: 'https://thientran.io',
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: '/photos/tenniscourt1.jpg', alt: 'Tennis' },
          { src: '/photos/tenniscourt2.jpg', alt: 'Tennis' },
          { src: '/photos/tenniscourt3.jpg', alt: 'Tennis' },
          { src: '/photos/tenniscourt4.jpg', alt: 'Tennis' },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: '/photos/tenniscourt1.jpg', alt: 'Tennis' },
          { src: '/photos/tenniscourt2.jpg', alt: 'Tennis' },
          { src: '/photos/tenniscourt3.jpg', alt: 'Tennis' },
          { src: '/photos/tenniscourt4.jpg', alt: 'Tennis' },
          { src: '/photos/tenniscourt5.jpg', alt: 'Tennis' },
          { src: '/photos/tenniscourt6.jpg', alt: 'Tennis' },
          { src: '/photos/tenniscourt7.jpg', alt: 'Tennis' },
          { src: '/photos/tenniscourt9.jpg', alt: 'Tennis' },
        ]}
      />
    </section>
  );
}

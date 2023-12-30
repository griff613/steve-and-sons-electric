/**
 * Each page can have different metadata
 */
import { Metadata } from 'next'
import React from "react";
 
export const metadata: Metadata = {
  title: 'Next.js',
}

/**
 * `app/page.tsx` is the UI for the `/` URL
 * 
 * - Pictures of their work. Maybe a slideshow?
 * - Quick description
 * - IDK maybe cost
 * 
 *  */ 
export default function Home() {
    return (
      <div className="container mx-auto px-4">
          <h1>Hello word</h1>
          <p>This is a content to make our page longer</p>
          <div className="w-full h-screen bg-green-300"></div>
          <p>
            Lorem Ipsum is simply dummy text ...
          </p>
        </div>
    );
  }
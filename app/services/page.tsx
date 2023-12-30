/**
 * Each page can have different metadata
 */
import { Metadata } from 'next'
import React from "react";
 
export const metadata: Metadata = {
  title: 'Next.js',
}

/**
 * app/services/page.tsx
 *  
 * */ 
export default function Page() {
    return <h1>Hello, services page!</h1>
}
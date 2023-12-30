/**
 * Tells this to be rendered on the client side 
 */
'use client'

import { useRouter } from 'next/navigation'
import { Metadata } from 'next'
import React from "react";


/**
 * Each page can have different metadata
 */
// export const metadata: Metadata = {
//   title: 'Next.js',
// }

/**
 * app/contact/page.tsx
 * - contact info,
 * - inquiry form
 * 
 * */
const Contact = () => {
    
    // You can route to another page, seems useful.
    // const router = useRouter()
    // router.push('Contact')
    

    return <h1>Hello, contact page!</h1>
}

export default Contact

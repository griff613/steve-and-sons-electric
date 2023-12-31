
import Image from 'next/image'

/**
 * This function acts as the main content veiw box. it has to wrap around each page.
 *
 */
export default function Index() {
  return (
		<>
		<div className="container mx-auto py-20">
		<p> Hi </p>
		<p> Hi </p>
		<p> Hi </p>
        <div className="w-full h-screen bg-green-300"></div>
        <p>
          Lorem Ipsum is simply dummy text ...
        </p>
      </div>
		</>
    ); 
}

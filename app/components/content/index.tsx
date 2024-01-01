
import Image from 'next/image'

/**
 * This function acts as the main content veiw box. it has to wrap around each page.
 * 
 */
const ContentWrapper = ({children}) => {
  return (
		<>
		<div className="container mx-auto p-20">
        <div className="mx-auto bg-green-300">
				{children}
				</div>

      </div>
		</>
    ); 
}

export default ContentWrapper

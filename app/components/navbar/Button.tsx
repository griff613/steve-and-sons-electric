import Link from "next/link";

const Button = () => {
    return (
		<Link href="tel:3036596261" passHref>
      <button className="h-12 rounded-lg fg-gray-950 hover:bg-white hover:text-gray-950 text-gray-100 font-bold px-5">303-659-6261
			</button>
		</Link>

    );
  };
  export default Button;

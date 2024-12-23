export function PromoBanner() {
  return (
    <div className="w-full bg-orange-500 text-black py-3">
      <div className="container mx-auto px-4 text-center font-medium flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
        <span className="text-sm md:text-lg text-center">
          🚀 Get your 2 startups listed to 200+ directories at just <b>$87.5</b> each! 🎉 Plan valid for 1 year. ⏳
        </span>
        <a
          href="https://www.paypal.com/ncp/payment/P7DNHRX74TF22"
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300 text-sm md:text-base"
        >
          Click Here
        </a>
      </div>
    </div>
  );
}

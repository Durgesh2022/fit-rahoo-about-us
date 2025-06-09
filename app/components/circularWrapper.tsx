import ComparisonSlider from "./ComparisonSlider";
import "./style2.css";

const CircularWrapper = () => {
  return (
    <div>
    <div className="flex items-center justify-center min-h-screen bg-black px-4 gap-8">
      {/* Left Circular Comparison */}
      <div className="rounded-full border-8 border-white p-2 w-[550px] h-[550px] overflow-hidden relative">
        <ComparisonSlider />
      </div>

      {/* Right Side Heading */}
      <div className="text-white w-[750px]">
        <h2 className="text-7xl font-bold leading-tight border-t border-b border-white ">
          Transform your life like this
        </h2>
        <p className="mt-4 text-lg text-gray-300 ">
          By using our product, you're not just adopting a tool — you're choosing to transform your lifestyle. Imagine waking up every day feeling energized, confident, and focused. Our system is designed to help you build healthy habits, stay consistent, and enjoy the journey.

To get started, all you need to do is follow three simple steps. These steps are backed by science, crafted by experts, and easy to integrate into your daily routine. Ready to unlock the healthiest, most exciting version of yourself?


        </p>
      </div>

      
    </div>
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-0 text-white">
    {/* Step 1 */}
  <div className="flex flex-col items-center px-6 py-8 cut-corners border-t border-white">
    <h2 className="text-5xl font-semibold mb-4">Step 1</h2>
    <img
  src="https://i.pinimg.com/736x/ed/5f/cd/ed5fcd6bf442c6afef0fc3aa9517b0e6.jpg"
  alt="Step 1"
  className="mb-4 w-full h-[260px] max-h-[22vh] object-cover filter grayscale rounded-lg"
/>

    <h3 className="text-2xl font-bold mb-2">Article Title 1</h3>
    <p className="text-gray-300 text-center mb-4">
      Short description of article 1 goes here. This should be concise and inviting.
    </p>
    <button className="mt-auto px-5 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
      Read More
    </button>
  </div>

  {/* Step 2 */}
  <div className="flex flex-col items-center px-6 py-8 cut-corners border-t border-l border-white">
    <h2 className="text-5xl font-semibold mb-4">Step 2</h2>
    <img
  src="https://i.pinimg.com/736x/20/58/74/20587473af918d5ea55a3e04926bc39f.jpg"
  alt="Step 1"
  className="mb-4 w-full h-[260px] max-h-[22vh] object-cover filter grayscale rounded-lg"
/>

    <h3 className="text-2xl font-bold mb-2">Article Title 2</h3>
    <p className="text-gray-300 text-center mb-4">
      Short description of article 2 goes here. This should be concise and inviting.
    </p>
    <button className="mt-auto px-5 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
      Read More
    </button>
  </div>

  {/* Step 3 */}
  <div className="flex flex-col items-center px-6 py-8 cut-corners border-t border-l border-white">
    <h2 className="text-5xl font-semibold mb-4">Step 3</h2>
    <img
  src="https://i.pinimg.com/736x/92/e6/25/92e62501bd4a6db3cf3c7aaf04025b36.jpg"
  alt="Step 1"
  className="mb-4 w-full h-[260px] max-h-[22vh] object-cover filter grayscale rounded-lg"
/>

    <h3 className="text-2xl font-bold mb-2">Article Title 3</h3>
    <p className="text-gray-300 text-center mb-4">
      Short description of article 3 goes here. This should be concise and inviting.
    </p>
    <button className="mt-auto px-5 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
      Read More
    </button>
  </div>


  
</div>


</div>
  );
};

export default CircularWrapper;

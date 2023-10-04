

const CookieStandForm = () => {


    return (
      <form className="max-w-md mx-auto mt-8 space-y-4 text-black">
  <div>
    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
      Location:
    </label>
    <input
      type="text"
      id="location"
      name="location"
      placeholder="Enter location..."
      className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>

  <div>
    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
      Description:
    </label>
    <input
      type="text"
      id="description"
      name="description"
      placeholder="Enter description..."
      className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>

  <div>
    <label htmlFor="minCustomers" className="block text-sm font-medium text-gray-700">
      Minimum Customers per Hour:
    </label>
    <input
      type="number"
      id="minCustomers"
      name="minCustomers"
      placeholder="Enter minimum customers per hour..."
      className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>

  <div>
    <label htmlFor="maxCustomers" className="block text-sm font-medium text-gray-700">
      Maximum Customers per Hour:
    </label>
    <input
      type="number"
      id="maxCustomers"
      name="maxCustomers"
      placeholder="Enter maximum customers per hour..."
      className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>

  <div>
    <label htmlFor="averageCookies" className="block text-sm font-medium text-gray-700">
      Average Cookies per Sale:
    </label>
    <input
      type="number"
      id="averageCookies"
      name="averageCookies"
      placeholder="Enter average cookies per sale..."
      className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>

  <div>
    <label htmlFor="owner" className="block text-sm font-medium text-gray-700">
      Owner:
    </label>
    <input
      type="text"
      id="owner"
      name="owner"
      placeholder="Enter owner..."
      className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>

  <div className="text-center">
    <button
      type="submit"
      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Create Cookie Stand
    </button>
  </div>
</form>

    );
  };
  
  export default CookieStandForm;
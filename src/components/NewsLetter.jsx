import React from "react";

const NewsLetter = () => {

    const submitHandler = (e) => {
        e.preventDefault()
    }


  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subsribe now and get 20% off
      </p>
      <p className="mt-4 text-gray-400">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam
        eum, qui delectus nulla iste.
      </p>

      <form
      onSubmit={submitHandler}
        action=""
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none "
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;

import React from "react";

const Home = () => {
  return (
    <div className="absolute top-20 left-1/2 border-2 border-black rounded-xl bg-pink-100 h-auto w-[30%] text-left p-8 flex flex-col gap-3 pl-9 overflow-hidden">
      <h2 className="text-2xl text-center">About this project</h2>
      <p>
        The Sidebar is mock; it only works for the <strong>Product</strong> and{" "}
        <strong>History</strong> tag.
        <br />
        It has no backend; all information is cleared on refresh.
      </p>
      <p>
        The mock data is created, and you can create, remove,
        <br />
        or update products.
      </p>
      <p>Looking forward to hearing your feedback.</p>
      <p>
        Best regards,
        <br />
      </p>
      <h3>
        <strong>Aleksandar Djurovic</strong>
      </h3>
      <a
        href="mailto:adjurovicfl@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email: adjurovicfl@gmail.com
      </a>
      <p>Phone: +48 71 735 3388</p>
      {/* <a
        href="https://linkedin.com/in/aleksandar0508"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin: https://linkedin.com/in/aleksandar0508
      </a> */}
    </div>
  );
};

export default Home;

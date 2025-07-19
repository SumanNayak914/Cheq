const articles = [
  {
    title: "What is a good Credit Mix for your credit profile?",
    desc: "Credit mix refers to the different types of credit accounts you have. Its impact on your",
    date: "Oct 4, 2023",
    image: "src/assets/box1.avif",
  },
  {
    title: "The History of Credit Scores",
    desc: "In ancient Egypt, merchants used a primitive form of credit scoring, relying on",
    date: "Oct 4, 2023",
    image: "src/assets/box2.avif",
  },
  {
    title: "Decoding Your Credit Card Number",
    desc: "Credit cards throughout the world follow the same standard for...",
    date: "Oct 4, 2023",
    image: "src/assets/box3.avif",
  },
];

const CreditArticlesSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-12"> 
          Learn more about{" "}
          <span className="text-red-400 font-bold">credit</span>
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 h-[500px]">
          {articles.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-4 md:p-6 overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all bg-white"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover rounded-2xl hover:shadow-[0_19px_38px_rgba(0,0,0,0.3),_0_15px_12px_rgba(0,0,0,0.22)] z-40 duration-300"
                
              />

              {/* Content */}
              <div className="p-5 space-y-3 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.desc}</p>

                <div className="flex items-center text-gray-400 text-sm pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"
                    />
                  </svg>
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreditArticlesSection;

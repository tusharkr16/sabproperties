const InfoCards = () => {
    const cards = [
      {
        title: "Who we are",
        description:
          "Grovy India is active as one of the Top Builders in South Delhi with luxury housings developed by our team.",
        icon: "🏢", // Replace with actual SVG or image if needed
      },
      {
        title: "The Grovy Story",
        description:
          "Grovy India Limited was established in the year 1985, with a purpose of developing real estate properties.",
        icon: "⚙️",
      },
      {
        title: "What is EPP model?",
        description:
          "The EPP Model or the each project priority model is the type of working model by which Grovy India abides.",
        icon: "👥",
      },
    ];
  
    return (
      <div className="container mx-auto px-4 py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-black/90 border-2 border-yellow-600 p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-3">{card.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white">{card.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default InfoCards;
  
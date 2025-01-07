import images from "@/assets/images";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  linkText: string;
  link: string;
}

const Card = ({ image, title, subtitle, linkText, link }: CardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0 bg-black bg-opacity-100 backdrop-blur-sm transition-blur duration-500 group-hover:backdrop-blur-0"></div>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold">{title}</h2>
        <p className="text-white text-xs md:text-sm mb-2 md:mb-4">{subtitle}</p>
        <a href={link} className="text-white text-xs md:text-sm font-medium underline">
          {linkText}
        </a>
      </div>
    </div>
  );
};

const CardGrid = () => {
  // Static dummy data for the cards
  const cards = [
    {
      image: images.pic1,
      title: "Card Title 1",
      subtitle: "This is a sample subtitle.",
      linkText: "Learn more →",
      link: "#",
    },
    {
      image: images.pic2,
      title: "Card Title 2",
      subtitle: "This is another sample subtitle.",
      linkText: "Discover more →",
      link: "#",
    },
    {
      image: images.pic3,
      title: "Card Title 3",
      subtitle: "Yet another sample subtitle.",
      linkText: "Find out more →",
      link: "#",
    },
    {
      image: images.pic4,
      title: "Card Title 4",
      subtitle: "Sample subtitle here.",
      linkText: "Explore more →",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6"> {/* Container wrapper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`transform ${
              index % 2 === 0 ? "translate-y-0" : " md:-translate-y-8"
            } transition-transform duration-500`}
          >
            <Card
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
              linkText={card.linkText}
              link={card.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;

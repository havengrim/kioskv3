import { faker } from "@faker-js/faker";

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
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h2 className="text-white text-2xl font-bold">{title}</h2>
        <p className="text-white text-sm mb-4">{subtitle}</p>
        <a href={link} className="text-white text-sm font-medium underline">
          {linkText}
        </a>
      </div>
    </div>
  );
};

const CardGrid = () => {
  // Generate exactly 4 cards using Faker
  const cards = Array.from({ length: 4 }).map(() => ({
    image: faker.image.url({ width: 300, height:359}),// Generate a placeholder image
    title: faker.company.name(), // Generate a company name
    subtitle: faker.lorem.words(3), // Generate a random subtitle
    linkText: `${faker.lorem.words(2)} →`, // Generate link text
    link: faker.internet.url(), // Generate a random URL
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`transform ${
            index % 2 === 0 ? "translate-y-0" : "-translate-y-6"
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
  );
};

export default CardGrid;

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const cardData = [
  {
    title: "Formation Continue",
    text: "Nous offrons des formations régulières et des ressources pratiques pour que vous puissiez améliorer vos compétences en trading, peu importe votre niveau.",
  },
  {
    title: "Communauté Solidaire",
    text: "Rejoignez une communauté soudée où les traders échangent des idées, des stratégies et des conseils dans un environnement bienveillant.",
  },
  {
    title: "Objectifs Partagés",
    text: "Nous mettons l'accent sur des objectifs d'investissement communs et soutenons chaque membre dans ses projets financiers personnels.",
  },
];

interface CardProps {
  title: string;
  text: string;
}
// Reusable Card Component
const Card = ({ title, text }: CardProps) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center">
    <h3 className="text-xl font-semibold text-primary">{title}</h3>
    <p className="text-gray-500 mt-4">{text}</p>
  </div>
);

const VisionSection = () => {
  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-primary">Notre Vision</h2>
        <p className="text-lg text-white mt-4 max-w-2xl mx-auto">
          Chez Honma, notre vision est de créer une communauté de traders
          passionnés et engagés, capable d'atteindre l'excellence dans leurs
          stratégies d'investissement tout en restant éthiques et responsables.
          Nous croyons en la puissance du savoir et du travail d'équipe.
        </p>
      </div>

      {/* Carousel for Mobile */}
      <div className="md:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {cardData.map((item, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <Card title={item.title} text={item.text} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Grid Layout for Desktop */}
      <div className="hidden md:flex justify-center gap-10">
        {cardData.map((item, index) => (
          <div key={index} className="w-1/3">
            <Card title={item.title} text={item.text} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionSection;

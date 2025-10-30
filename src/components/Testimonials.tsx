import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    text: "Em 21 dias a minha vida mudou completamente. Finalmente consegui criar hábitos que me fazem sentir poderosa!",
    rating: 5,
  },
  {
    name: "João Pereira",
    text: "O programa é incrivelmente prático. Todos os dias sabia exatamente o que fazer. Recomendo a 100%!",
    rating: 5,
  },
  {
    name: "Ana Costa",
    text: "Já tinha lido muitos livros, mas este programa fez-me finalmente AGIR. Valeu cada cêntimo!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
        O que dizem quem já transformou a sua vida
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-secondary text-secondary"
                />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 italic">
              "{testimonial.text}"
            </p>
            <p className="font-bold">— {testimonial.name}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-xl font-bold mb-2">
          Junta-te a mais de{" "}
          <span className="text-primary text-3xl">3.500</span> pessoas
        </p>
        <p className="text-muted-foreground">
          que já transformaram as suas vidas em apenas 21 dias
        </p>
      </div>
    </div>
  );
};

export default Testimonials;

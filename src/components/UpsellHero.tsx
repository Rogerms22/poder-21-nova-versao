import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/21-dias-poder-hero.jpg";

const UpsellHero = () => {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Espera! Ainda não terminaste...
            </h1>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary leading-tight">
              21 DIAS DE PODER
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Cria a Tua Nova Versão
            </p>
          </div>

          <p className="text-lg lg:text-xl leading-relaxed">
            Agora que vais aprender a{" "}
            <span className="text-primary font-bold">fazer falta</span>, imagina
            teres um programa completo de{" "}
            <span className="text-primary font-bold">21 dias</span> para
            transformares-te na tua melhor versão?
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-lg">
                <span className="font-bold">21 dias de exercícios práticos</span>{" "}
                para transformação pessoal
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-lg">
                <span className="font-bold">Plano diário estruturado</span> para
                criares novos hábitos poderosos
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-lg">
                <span className="font-bold">Ferramentas de neurociência</span>{" "}
                aplicadas ao desenvolvimento pessoal
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-lg">
                <span className="font-bold">Acesso vitalício</span> - repete
                quantas vezes quiseres
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-lg">
                <span className="font-bold">Resultados comprovados</span> em apenas
                3 semanas
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Button variant="neon" size="lg" className="w-full lg:w-auto text-lg py-6 px-12">
              Quero transformar-me agora → acesso imediato
            </Button>
            
            <div className="text-center lg:text-left">
              <p className="text-sm text-muted-foreground line-through">
                De: <span className="font-bold">€97</span>
              </p>
              <p className="text-3xl font-bold text-primary">
                por €39,99{" "}
                <span className="text-lg text-foreground">(pagamento único)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
          <img
            src={heroImage}
            alt="21 Dias de Poder - Cria a Tua Nova Versão"
            className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default UpsellHero;

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/rotina-poder-mockup.png";

const UpsellHero = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              Espera! Ainda não terminaste...
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary leading-tight">
              21 DIAS DE PODER
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground">
              Cria a Tua Nova Versão
            </p>
          </div>

          <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
            Agora que vais aprender a{" "}
            <span className="text-primary font-bold">fazer falta</span>, imagina
            teres um programa completo de{" "}
            <span className="text-primary font-bold">21 dias</span> para
            transformares-te na tua melhor versão?
          </p>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg">
                <span className="font-bold">21 dias de exercícios práticos</span>{" "}
                para transformação pessoal
              </p>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg">
                <span className="font-bold">Plano diário estruturado</span> para
                criares novos hábitos poderosos
              </p>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg">
                <span className="font-bold">Ferramentas de neurociência</span>{" "}
                aplicadas ao desenvolvimento pessoal
              </p>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg">
                <span className="font-bold">Acesso vitalício</span> - repete
                quantas vezes quiseres
              </p>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg">
                <span className="font-bold">Resultados comprovados</span> em apenas
                3 semanas
              </p>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <Button 
              variant="neon" 
              size="lg" 
              className="w-full lg:w-auto text-base sm:text-lg py-5 sm:py-6 px-8 sm:px-12"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).checkoutElements) {
                  (window as any).checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
                }
              }}
            >
              Quero transformar-me agora → acesso imediato
            </Button>
            
            <div className="text-center lg:text-left">
              <p className="text-sm text-muted-foreground line-through">
                De: <span className="font-bold">€97</span>
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-primary">
                por €39,99{" "}
                <span className="text-base sm:text-lg text-foreground">(pagamento único)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={heroImage}
            alt="Rotina de Poder - 21 Dias para te tornares uma pessoa imparável"
            className="w-full max-w-lg mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default UpsellHero;

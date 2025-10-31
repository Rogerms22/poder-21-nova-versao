import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock } from "lucide-react";

const FinalCTA = () => {
  return (
    <div className="bg-gradient-to-b from-background to-card py-12 sm:py-16 px-4">
      <div className="container mx-auto max-w-3xl text-center space-y-6 sm:space-y-8">
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
            Última Oportunidade
          </h2>
          <p className="text-lg sm:text-xl text-primary font-bold">
            Esta oferta desaparece quando saíres desta página
          </p>
        </div>

        <div className="bg-card border-2 border-primary p-5 sm:p-8 rounded-lg space-y-5 sm:space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold">O que vais receber AGORA:</h3>
          
          <div className="space-y-2 sm:space-y-3 text-left">
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg">
                Programa completo "21 Dias de Poder" (valor: €97)
              </p>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg">
                21 exercícios práticos diários em formato PDF
              </p>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg">Plano de ação estruturado dia-a-dia</p>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg">
                Acesso vitalício - repete quantas vezes quiseres
              </p>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg">Acesso imediato via E-mail + WhatsApp</p>
            </div>
          </div>

          <div className="border-t border-border pt-5 sm:pt-6 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base font-bold">Oferta expira em breve</span>
            </div>
            
            <div>
              <p className="text-base sm:text-lg line-through text-muted-foreground">
                Valor normal: €97
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                Apenas €39,99
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                (pagamento único - sem mensalidades)
              </p>
            </div>

            <Button 
              variant="neon" 
              size="lg" 
              className="w-full text-lg sm:text-xl py-6 sm:py-8"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).checkoutElements) {
                  (window as any).checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
                }
              }}
            >
              SIM! Quero transformar a minha vida em 21 dias
            </Button>

            <p className="text-xs text-muted-foreground mt-3 sm:mt-4">
              ✓ Compra 100% segura | ✓ Acesso imediato | ✓ Garantia de satisfação
            </p>
          </div>
        </div>

        <div className="text-center pt-6 sm:pt-8">
          <p className="text-xs sm:text-sm text-muted-foreground italic">
            "O melhor momento para começar foi há 21 dias. O segundo melhor
            momento é AGORA."
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;

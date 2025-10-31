import { Bell } from "lucide-react";

const OfferBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 sm:py-3 px-4 text-center font-bold">
      <div className="flex items-center justify-center gap-2">
        <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="text-sm sm:text-base">Oferta exclusiva válida apenas até 30/10</span>
      </div>
    </div>
  );
};

export default OfferBanner;

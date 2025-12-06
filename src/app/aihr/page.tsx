// Copy of homepage for AIHR
import Hero from '../home/includes/Hero';
import StackingCards from './StackingCardsClient';
import SaasAiInnovation from '../home/includes/SaasAiInnovation';
import Partner from '../home/includes/Partner';
import Services from '../home/includes/Services';

export default function AIHRPage() {
  return (
    <div>
      <Hero />
      <SaasAiInnovation />
      <Services />
      <StackingCards />
      <Partner />
    </div>
  );
}

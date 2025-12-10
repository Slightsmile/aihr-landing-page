// AIHR Page with HR-focused content
import AIHRHero from './includes/AIHRHero';
import StackingCards from './StackingCardsClient';
import AIHRInnovation from './includes/AIHRInnovation';
import Partner from '../home/includes/Partner';

export default function AIHRPage() {
  return (
    <div>
      <AIHRHero />
      <AIHRInnovation />
      <StackingCards />
      <Partner />
    </div>
  );
}

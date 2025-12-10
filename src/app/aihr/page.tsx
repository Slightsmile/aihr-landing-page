// AIHR Page with HR-focused content
import AIHRHero from './includes/AIHRHero';
import AIHRFeatures from './includes/AIHRFeatures';
import AIHRInnovation from './includes/AIHRInnovation';
import Partner from '../home/includes/Partner';

export default function AIHRPage() {
  return (
    <div>
      <AIHRHero />
      <AIHRInnovation />
      <AIHRFeatures />
      <Partner />
    </div>
  );
}


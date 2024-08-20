import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  return (
    <section className = 'App'>
      <TwitterFollowCard userName = 'midudev' name = 'Miguel Angel Durán García'/>
      <TwitterFollowCard userName = 'mouredev' name = 'Brais Moure'/>
    </section>  /* Alternative for React.Fragment */
  );
}
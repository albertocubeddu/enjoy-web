"use client"
import { deleteSport } from "@/app/lib/actions";

interface SportsDeleteActionButtonClientProps {
    id: string | number;
  }
  
// As you're using onClick, this MUST be a client component, as you're interacting with the user.
// Anything with interaction is managed on the client side, therefore you need to extract from your server side and put them in a different component! (This at the moment, it's the best practice)
  const SportsDeleteActionButtonClient: React.FC<SportsDeleteActionButtonClientProps> = ({ id }) => {
    return (
        <button onClick={() => deleteSport(id)}>SportsDeleteAction</button>
        )
  };

export default SportsDeleteActionButtonClient;


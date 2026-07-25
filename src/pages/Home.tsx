import { IonPage, IonContent } from "@ionic/react";
import Terminal from "../components/terminal/Terminal";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Terminal />
      </IonContent>
    </IonPage>
  );
};

export default Home;
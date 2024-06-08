import { MenuProvider } from "./components/menuContext";
import Main from "./components/main";

export default function Home() {
  return (
    <MenuProvider>
    <Main/>
    </MenuProvider>
  );
}

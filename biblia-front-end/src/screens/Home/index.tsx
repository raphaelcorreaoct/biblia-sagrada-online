
import HomeView from "./View";
import useHomeModel from "./Model";
import Layout from "../../components/Layout";

export default function HomeViewModel() {
  const useHome = useHomeModel();


  return <Layout><HomeView {...useHome}/></Layout>;
}

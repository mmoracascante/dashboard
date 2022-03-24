import './Home.scss';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Home() {
  return (
    <div className="Home">
      <Sidebar />
      <div className="homeContainer">container</div>
    </div>
  );
}

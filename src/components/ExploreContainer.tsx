import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container" className="bg-red-500">
      <b className="bg-red-500">Scan the nearest QR CODE</b>
      <p className=''>Click the button below to open QR SCANNER</p>
    </div>
  );
};

export default ExploreContainer;
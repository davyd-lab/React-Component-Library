import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {

  const handleClick = () => {
    console.log('button clicked');
  };

  return (
    <div>
      <div>
        <Button onClick={handleClick} secondary outline rounded>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button className="mb-5"  secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Sign Up Now
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;

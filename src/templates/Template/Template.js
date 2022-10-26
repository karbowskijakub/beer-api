import { Wrapper } from './Template.styles';
import Navigation from '../../components/organisms/Navigation/Navigation';
import Footer from '../../components/organisms/Footer/Footer';

const Template = ({children }) => {

  return (
    <Wrapper>
      <Navigation />
    {children}
    <Footer/>
    </Wrapper>
  );
};

export default Template;
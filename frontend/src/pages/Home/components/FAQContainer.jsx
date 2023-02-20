import { FlexContainer } from '../style';
import FaqItem from './microComponents/FaqItem';

const FAQContainer = () => {
  return (
    <FlexContainer>
      <FaqItem
        number='01'
        title='How can I create an account?'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />
      <FaqItem
        number='02'
        title='Is this app free?'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />
      <FaqItem
        number='03'
        title='What countries is fluff available in?'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />
    </FlexContainer>
  );
};
export default FAQContainer;

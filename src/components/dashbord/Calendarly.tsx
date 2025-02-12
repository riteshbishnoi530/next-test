import { InlineWidget } from 'react-calendly';

const Calendly = () => {


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="calendly-inline-widget" data-url="https://calendly.com/bishnoiritesh6" />
      <InlineWidget url='https://calendly.com/bishnoiritesh6' styles={{
        width: '100%',
        height: '100%',
      }}/>
    </div>
  );
};

export default Calendly;
import CustomLayout from '@/components/layout';
import '@/styles/global.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  );
};

export default MyApp;
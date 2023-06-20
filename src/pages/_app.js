import MyLayout from '../components/layout';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  );
};

export default MyApp;
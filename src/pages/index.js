import { Button } from 'antd';


const bigText = {
  fontWeight: 700,
  fontSize: 35,
  margin: 0
}

const HomePage = () => {
  return (
    <div
      style={{
        backgroundColor: '#00218F',
        paddingTop: 40,
        paddingBottom: 40,
        marginBottom: 40,
      }}
    >
      <p style={bigText}>Bring Your <span style={{ color: '#5FFE9F' }}>Software Idea</span> To</p>
      <p style={bigText}>Life In High Quality.</p>
      <p style={{ marginBottom: 0 }}>
        We provide many features that you can use cheaply and easily.
      </p>
      <p style={{ marginTop: 0 }}>
        Try it now and get an interesting promo
      </p>
      <div>
        <Button
          style={{
            color: '#1F1F1F',
            fontWeight: 800,
            padding: '16 20 16 20',
            borderRadius: '2px',
            backgroundColor: '#5FFE9F',
            marginRight: 20
          }}
        >
          START BUILDING
        </Button>
        <Button
          style={{
            color: '#ffffff',
            fontWeight: 800,
            padding: '16 20 16 20',
            borderRadius: '2px',
            backgroundColor: '#00218F',
          }}
        >
          Watch A Demo
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
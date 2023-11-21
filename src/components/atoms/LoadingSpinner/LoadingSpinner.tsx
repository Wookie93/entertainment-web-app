import '../../../assets/styles/spinner.css';

const LoadingSpinner = () => {
  return (
    <div>
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
      <div className="text-center">Loading data...</div>
    </div>
  );
};

export default LoadingSpinner;

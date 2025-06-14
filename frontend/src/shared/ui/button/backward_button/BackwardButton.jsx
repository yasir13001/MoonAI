import './BackwardButton.css';

const BackwardButton = () => {
  return (
    <div className="backward-button-wrapper">
      <button type="button" className='backward-button' class="flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
        Go back
      </button>
    </div>
  );
}

export default BackwardButton;

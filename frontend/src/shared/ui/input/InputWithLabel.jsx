import './InputWithLabel.css';

function InputWithLabel({ label, id, type = "text", value, onChange }) {
  return (
    <div className="input-container">
      <label htmlFor={id} class="block text-sm font-medium text-gray-200">{label}</label>
      <div class="mt-1">
        <input id={id} type={type} value={value} onChange={onChange} required class="py-3 px-4 block w-full shadow-sm rounded-md"/>
      </div>
    </div>
  );
}

export default InputWithLabel;

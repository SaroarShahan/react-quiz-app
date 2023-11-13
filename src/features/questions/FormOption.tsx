import { ChangeEvent } from 'react';

interface FormOptionProps {
  required?: boolean;
  label: string;
  value: string;
  name: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormOption = ({
  label,
  value,
  name,
  required = false,
  placeholder = 'Enter value here',
  onChange,
}: FormOptionProps) => (
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
      {label}
    </label>
    <input
      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={name}
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  </div>
);

export default FormOption;

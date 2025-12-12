import { inputProps } from "@/types";

const Input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className="block w-full p-5 mx-2 border rounded-xl text-lg bg-white/10 border-white/20 placeholder-gray-300 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
      />
    </div>
  );
};

export default Input;
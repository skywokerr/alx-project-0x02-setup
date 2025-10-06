import { CardProps } from '../interfaces';

const Card: React.FC<CardProps> = ({ 
  title, 
  content, 
  variant = 'default',
  className = ''
}) => {
  // Define base styles
  const baseStyles = 'rounded-lg shadow-md p-6 border transition-all duration-300 hover:shadow-lg';
  
  // Define variant styles
  const variantStyles = {
    default: 'bg-white border-gray-200 text-gray-800',
    primary: 'bg-blue-50 border-blue-200 text-blue-900',
    secondary: 'bg-gray-50 border-gray-300 text-gray-800'
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
};

export default Card;
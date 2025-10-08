import Header from '../components/layout/Header';
import Button from '../components/common/Button';
import { useState } from 'react';

export default function AboutPage() {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = (buttonName: string) => {
    setClickCount(prev => prev + 1);
    console.log(`${buttonName} clicked! Total clicks: ${clickCount + 1}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Page
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn more about our ALX Project 2 application and explore our reusable Button component.
          </p>
          
          {/* Button Component Demonstration */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Button Component Demo</h2>
            <p className="text-gray-600 mb-6">Total clicks: {clickCount}</p>
            
            {/* Size Variations */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Size Variations</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button 
                  size="small" 
                  onClick={() => handleButtonClick('Small Button')}
                >
                  Small Button
                </Button>
                <Button 
                  size="medium" 
                  onClick={() => handleButtonClick('Medium Button')}
                >
                  Medium Button
                </Button>
                <Button 
                  size="large" 
                  onClick={() => handleButtonClick('Large Button')}
                >
                  Large Button
                </Button>
              </div>
            </div>

            {/* Shape Variations */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Shape Variations</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button 
                  shape="rounded-sm" 
                  variant="primary"
                  onClick={() => handleButtonClick('Slightly Rounded')}
                >
                  Slightly Rounded
                </Button>
                <Button 
                  shape="rounded-md" 
                  variant="secondary"
                  onClick={() => handleButtonClick('Medium Rounded')}
                >
                  Medium Rounded
                </Button>
                <Button 
                  shape="rounded-full" 
                  variant="outline"
                  onClick={() => handleButtonClick('Fully Rounded')}
                >
                  Fully Rounded
                </Button>
              </div>
            </div>

            {/* Variant Combinations */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Variant Combinations</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button 
                  variant="primary"
                  size="medium"
                  shape="rounded-md"
                  onClick={() => handleButtonClick('Primary Variant')}
                >
                  Primary
                </Button>
                <Button 
                  variant="secondary"
                  size="medium"
                  shape="rounded-md"
                  onClick={() => handleButtonClick('Secondary Variant')}
                >
                  Secondary
                </Button>
                <Button 
                  variant="outline"
                  size="medium"
                  shape="rounded-md"
                  onClick={() => handleButtonClick('Outline Variant')}
                >
                  Outline
                </Button>
                <Button 
                  variant="ghost"
                  size="medium"
                  shape="rounded-md"
                  onClick={() => handleButtonClick('Ghost Variant')}
                >
                  Ghost
                </Button>
              </div>
            </div>

            {/* Complex Examples */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Complex Examples</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="large"
                  shape="rounded-full"
                  variant="primary"
                  onClick={() => handleButtonClick('Large Pill Button')}
                >
                  Large Pill Button
                </Button>
                <Button 
                  size="small"
                  shape="rounded-sm"
                  variant="outline"
                  onClick={() => handleButtonClick('Small Square')}
                >
                  Small Square
                </Button>
                <Button 
                  size="medium"
                  shape="rounded-full"
                  variant="ghost"
                  onClick={() => handleButtonClick('Medium Ghost Pill')}
                >
                  Ghost Pill
                </Button>
              </div>
            </div>

            {/* Disabled State */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Disabled State</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="medium"
                  shape="rounded-md"
                  variant="primary"
                  disabled
                >
                  Disabled Primary
                </Button>
                <Button 
                  size="medium"
                  shape="rounded-md"
                  variant="outline"
                  disabled
                >
                  Disabled Outline
                </Button>
              </div>
            </div>
          </div>

          {/* Button Component Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Button Features</h2>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Multiple sizes: small, medium, large
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Various shapes: rounded-sm, rounded-md, rounded-full
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Multiple variants: primary, secondary, outline, ghost
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Disabled state support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  TypeScript support with full type safety
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Usage Examples</h2>
              <div className="text-left space-y-4 text-gray-700">
                <code className="block bg-gray-100 p-2 rounded text-sm">
                  {`<Button size="large" shape="rounded-full" variant="primary">`}
                </code>
                <code className="block bg-gray-100 p-2 rounded text-sm">
                  {`<Button size="small" variant="outline" disabled>`}
                </code>
                <code className="block bg-gray-100 p-2 rounded text-sm">
                  {`<Button variant="ghost" onClick={handleClick}>`}
                </code>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ALX Project 2 - About Page with Button Components</p>
        </div>
      </footer>
    </div>
  );
}
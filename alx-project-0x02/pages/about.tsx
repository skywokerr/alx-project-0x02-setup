import Header from '../components/layout/Header';
import Button from '../components/common/Button';

export default function AboutPage() {
  const handleButtonClick = (buttonName: string) => {
    alert(`${buttonName} clicked!`);
    console.log(`${buttonName} was clicked`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Page
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Learn more about our ALX Project 2 application and explore our reusable Button component.
          </p>
          
          {/* Button Component Demonstration */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Button Component Demo</h2>
            
            {/* Three buttons with different sizes and shapes as requested */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {/* Small button with slight rounding */}
              <Button 
                size="small"
                shape="rounded-sm"
                onClick={() => handleButtonClick('Small Slightly Rounded Button')}
              >
                Small Button
              </Button>
              
              {/* Medium button with medium rounding */}
              <Button 
                size="medium"
                shape="rounded-md"
                variant="secondary"
                onClick={() => handleButtonClick('Medium Rounded Button')}
              >
                Medium Button
              </Button>
              
              {/* Large button with full rounding */}
              <Button 
                size="large"
                shape="rounded-full"
                variant="outline"
                onClick={() => handleButtonClick('Large Fully Rounded Button')}
              >
                Large Button
              </Button>
            </div>

            {/* Additional examples to show all combinations */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">All Size and Shape Combinations</h3>
              
              {/* Small buttons with different shapes */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4 text-gray-700">Small Size Variations</h4>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <Button 
                    size="small"
                    shape="rounded-sm"
                    onClick={() => handleButtonClick('Small Rounded-sm')}
                  >
                    Rounded Small
                  </Button>
                  <Button 
                    size="small"
                    shape="rounded-md"
                    variant="secondary"
                    onClick={() => handleButtonClick('Small Rounded-md')}
                  >
                    Rounded Medium
                  </Button>
                  <Button 
                    size="small"
                    shape="rounded-full"
                    variant="outline"
                    onClick={() => handleButtonClick('Small Rounded-full')}
                  >
                    Rounded Full
                  </Button>
                </div>
              </div>

              {/* Medium buttons with different shapes */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4 text-gray-700">Medium Size Variations</h4>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <Button 
                    size="medium"
                    shape="rounded-sm"
                    onClick={() => handleButtonClick('Medium Rounded-sm')}
                  >
                    Rounded Small
                  </Button>
                  <Button 
                    size="medium"
                    shape="rounded-md"
                    variant="secondary"
                    onClick={() => handleButtonClick('Medium Rounded-md')}
                  >
                    Rounded Medium
                  </Button>
                  <Button 
                    size="medium"
                    shape="rounded-full"
                    variant="outline"
                    onClick={() => handleButtonClick('Medium Rounded-full')}
                  >
                    Rounded Full
                  </Button>
                </div>
              </div>

              {/* Large buttons with different shapes */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4 text-gray-700">Large Size Variations</h4>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <Button 
                    size="large"
                    shape="rounded-sm"
                    onClick={() => handleButtonClick('Large Rounded-sm')}
                  >
                    Rounded Small
                  </Button>
                  <Button 
                    size="large"
                    shape="rounded-md"
                    variant="secondary"
                    onClick={() => handleButtonClick('Large Rounded-md')}
                  >
                    Rounded Medium
                  </Button>
                  <Button 
                    size="large"
                    shape="rounded-full"
                    variant="outline"
                    onClick={() => handleButtonClick('Large Rounded-full')}
                  >
                    Rounded Full
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Button Component Documentation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Button Props</h2>
              <ul className="text-left space-y-3 text-gray-700">
                <li><strong>size:</strong> 'small' | 'medium' | 'large'</li>
                <li><strong>shape:</strong> 'rounded-sm' | 'rounded-md' | 'rounded-full'</li>
                <li><strong>variant:</strong> 'primary' | 'secondary' | 'outline'</li>
                <li><strong>onClick:</strong> Click handler function</li>
                <li><strong>disabled:</strong> boolean</li>
                <li><strong>type:</strong> 'button' | 'submit' | 'reset'</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Usage Examples</h2>
              <div className="text-left space-y-4 text-gray-700">
                <code className="block bg-gray-100 p-2 rounded text-sm">
                  {`<Button size="small" shape="rounded-sm">Small</Button>`}
                </code>
                <code className="block bg-gray-100 p-2 rounded text-sm">
                  {`<Button size="large" shape="rounded-full" variant="outline">Large Pill</Button>`}
                </code>
                <code className="block bg-gray-100 p-2 rounded text-sm">
                  {`<Button onClick={handleClick} disabled>Disabled</Button>`}
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
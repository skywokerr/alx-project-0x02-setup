import Header from '../components/layout/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Page
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn more about our ALX Project 2 application and its purpose.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
              <p className="text-gray-700">
                To demonstrate the power of Next.js routing and create a scalable, 
                maintainable web application with modern technologies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Technology Stack</h2>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• Next.js 14</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• React 18</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Project Goals</h2>
            <ol className="text-left space-y-3 text-gray-700 list-decimal list-inside">
              <li>Implement basic routing with Next.js Pages Router</li>
              <li>Create reusable layout components</li>
              <li>Demonstrate TypeScript integration</li>
              <li>Showcase responsive design with Tailwind CSS</li>
              <li>Provide a foundation for future ALX projects</li>
            </ol>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ALX Project 2 - About Page</p>
        </div>
      </footer>
    </div>
  );
}
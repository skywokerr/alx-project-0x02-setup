import Header from '../components/layout/Header';
import Card from '../components/common/Card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Home Page
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Welcome to the Home page featuring our reusable Card component.
          </p>
          
          {/* Card Component Demonstration */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card
              title="Feature One"
              content="This is the first feature card demonstrating the reusable Card component with default styling."
            />
            
            <Card
              title="Feature Two"
              content="This card shows how we can display different content while maintaining consistent design patterns."
              variant="primary"
            />
            
            <Card
              title="Feature Three"
              content="The Card component accepts props for title and content, making it highly reusable across the application."
              variant="secondary"
            />
          </div>

          {/* Additional Card Examples */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card
              title="Technology Stack"
              content="Built with Next.js, TypeScript, and Tailwind CSS. This demonstrates modern web development practices with type safety and responsive design."
              variant="primary"
            />
            
            <Card
              title="Project Goals"
              content="Create reusable components, implement proper TypeScript interfaces, and build a scalable application structure for future ALX projects."
              variant="default"
            />
          </div>

          {/* Single Wide Card */}
          <div className="max-w-2xl mx-auto mt-8">
            <Card
              title="About This Implementation"
              content="The Card component is built with TypeScript for type safety. It accepts title and content as required props, with optional variant and className props for customization. This makes it flexible while maintaining consistency across the application."
              variant="secondary"
              className="text-center"
            />
          </div>
        </section>

        {/* More Card Examples in a Grid */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            More Card Examples
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              title="Responsive Design"
              content="Cards adapt to different screen sizes using Tailwind CSS responsive utilities."
            />
            <Card
              title="Type Safety"
              content="TypeScript ensures that all props are properly typed and validated."
              variant="primary"
            />
            <Card
              title="Reusable Components"
              content="Write once, use everywhere with consistent styling and behavior."
              variant="secondary"
            />
            <Card
              title="Easy Customization"
              content="Variant system and className prop allow for easy styling adjustments."
            />
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ALX Project 2 - Home Page with Card Components</p>
        </div>
      </footer>
    </div>
  );
}
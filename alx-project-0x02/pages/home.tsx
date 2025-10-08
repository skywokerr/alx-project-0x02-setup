import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { PostData } from '@/interfaces';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userPosts, setUserPosts] = useState<PostData[]>([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmitPost = (postData: PostData) => {
    setUserPosts(prev => [postData, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Home Page
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Welcome to the Home page featuring our reusable Card component and dynamic posts.
          </p>

          {/* Add Post Button */}
          <div className="mb-12">
            <button
              onClick={handleOpenModal}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md"
            >
              + Create New Post
            </button>
          </div>
          
          {/* User Created Posts */}
          {userPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userPosts.map((post, index) => (
                  <Card
                    key={index}
                    title={post.title}
                    content={post.content}
                    variant={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'default'}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Static Card Component Demonstration */}
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
              title="Dynamic Content"
              content="Add your own posts using the 'Create New Post' button above. Your posts will appear in the 'Your Posts' section."
              variant="primary"
            />
            
            <Card
              title="Modal Component"
              content="The PostModal component accepts user input and passes data back to the parent component for dynamic content updates."
              variant="default"
            />
          </div>
        </section>

        {/* More Card Examples */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Application Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              title="Modal Forms"
              content="User-friendly modal forms for data input with validation and error handling."
            />
            <Card
              title="State Management"
              content="React hooks manage modal state and user-generated content efficiently."
              variant="primary"
            />
            <Card
              title="Dynamic Updates"
              content="Real-time content updates without page refreshes using React state."
              variant="secondary"
            />
            <Card
              title="Type Safety"
              content="Full TypeScript implementation with proper interfaces for all components."
            />
          </div>
        </section>
      </main>

      {/* Post Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitPost}
      />

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ALX Project 2 - Home Page with Dynamic Posts</p>
        </div>
      </footer>
    </div>
  );
}
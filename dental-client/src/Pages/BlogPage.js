import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const BlogCard = ({ category, title, description, imageUrl }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <span className="text-blue-600 text-sm">{category}</span>
      <h3 className="text-xl font-semibold mt-2 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      <button className="text-blue-600 hover:text-blue-700">Read More &gt;</button>
    </div>
  </div>
);

const FeaturedArticle = ({ title, date }) => (
  <div className="flex items-center gap-4 mb-4">
    <div className="w-2 h-2 bg-blue-600 rounded-full" />
    <div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  </div>
);

const BlogPage = () => {
  const blogPosts = [
    {
      category: 'News',
      title: 'Oral Cancer Awareness: Signs, Symptoms, and Prevention',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ...',
      imageUrl: '/images/dental-checkup.jpg'
    },
    {
      category: 'Tips',
      title: 'The Dos and Do nots of Teeth Whitening: Expert Advice',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ...',
      imageUrl: '/images/teeth-whitening.jpg'
    },
    {
      category: 'Health',
      title: 'Oral Health for All Ages: Tips for Kids, Teens, and Adults',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ...',
      imageUrl: '/images/family-dental.jpg'
    },
    {
      category: 'News',
      title: 'Truth About Teeth Whitening: Separating Fact from Fiction',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ...',
      imageUrl: '/images/whitening-treatment.jpg'
    },
    {
      category: 'Health',
      title: 'What Your Mouth Can Reveal About Your Overall Health',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ...',
      imageUrl: '/images/dental-health.jpg'
    },
    {
      category: 'Tips',
      title: 'Keeping Your Smile Healthy: Tips and Tricks from a Dentist',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ...',
      imageUrl: '/images/healthy-smile.jpg'
    }
  ];

  return (
    <div className="bg-[#F8FAFF] min-h-screen">
      {/* Header Section */}
      <div className="text-center py-16 px-4">
        <p className="text-blue-600 text-sm mb-2">Blog</p>
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-blue-500">Dental</span> Blog & Article
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Nullam quis ante. Etiam sit amet orci eget eros faucibus
          tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Latest Article</h2>
            <div className="grid gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div>
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">›</span>
                  <span>Tips</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">›</span>
                  <span>News</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">›</span>
                  <span>Health</span>
                </li>
              </ul>
            </div>

            {/* Featured Articles */}
            <div>
              <h3 className="text-xl font-bold mb-4">Featured Article</h3>
              <FeaturedArticle 
                title="Keeping Your Smile Healthy: Tips and Tricks from a Dentist"
                date="March 2, 2023"
              />
              <FeaturedArticle 
                title="What Your Mouth Can Reveal About Your Overall Health"
                date="March 2, 2023"
              />
              <FeaturedArticle 
                title="Truth About Teeth Whitening: Separating Fact from Fiction"
                date="March 2, 2023"
              />
            </div>

            {/* Contact Box */}
            <div className="bg-[#0A1B3D] text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Become More Closer</h3>
              <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <p>Jl. Patimura II No. 18, Denpasar</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <p>dentic@mail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <p>+01234 567 890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
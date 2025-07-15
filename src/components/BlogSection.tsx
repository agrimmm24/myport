import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Web Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and design websites, from automated code generation to intelligent user experiences.',
      date: '2024-01-15',
      author: 'Agrim Srivastava',
      category: 'AI/ML',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Docker Best Practices for Developers',
      excerpt: 'A comprehensive guide to containerization best practices, optimization techniques, and common pitfalls to avoid when working with Docker.',
      date: '2024-01-10',
      author: 'Agrim Srivastava',
      category: 'DevOps',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Learn advanced patterns and techniques for building large-scale React applications that are maintainable, performant, and developer-friendly.',
      date: '2024-01-05',
      author: 'Agrim Srivastava',
      category: 'Frontend',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="blog" className="section">
      <h2 className="section-heading">BLOG</h2>
      
      <div className="blog-container">
        {blogPosts.map((post, index) => (
          <article 
            key={post.title}
            className={`blog-card animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <div className="blog-category">{post.category}</div>
            </div>
            
            <div className="blog-content">
              <div className="blog-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="meta-item">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="read-time">{post.readTime}</div>
              </div>
              
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              
              <button className="read-more-btn">
                Read More
                <ArrowRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>

      <style jsx>{`
        .blog-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 1400px;
          width: 100%;
        }

        .blog-card {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(128, 128, 128, 0.5);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          opacity: 0;
          animation-fill-mode: forwards;
          cursor: pointer;
        }

        .blog-card:hover {
          border-color: #00FFFF;
          box-shadow: 
            0 0 30px rgba(0, 255, 255, 0.6),
            0 0 60px rgba(0, 255, 255, 0.4);
          transform: translateY(-10px) scale(1.02);
          border-radius: 50px;
        }

        .blog-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .blog-card:hover .blog-image img {
          transform: scale(1.1);
        }

        .blog-category {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 255, 255, 0.9);
          color: #000000;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .blog-content {
          padding: 1.5rem;
        }

        .blog-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: rgba(255, 255, 255, 0.7);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
        }

        .read-time {
          color: #00FFFF;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .blog-title {
          font-size: 1.3rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          color: #FF00FF;
          text-transform: uppercase;
          margin-bottom: 1rem;
          letter-spacing: 1px;
          line-height: 1.3;
        }

        .blog-excerpt {
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          font-family: 'JetBrains Mono', monospace;
          margin-bottom: 1.5rem;
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: #00FFFF;
          border: 2px solid #00FFFF;
          padding: 0.8rem 1.5rem;
          border-radius: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .read-more-btn:hover {
          background: #00FFFF;
          color: #000000;
          transform: translateX(5px);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
        }

        @media (max-width: 768px) {
          .blog-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .blog-image {
            height: 150px;
          }
          
          .blog-content {
            padding: 1rem;
          }
          
          .blog-title {
            font-size: 1.1rem;
          }
          
          .blog-excerpt {
            font-size: 0.8rem;
          }
          
          .meta-item {
            font-size: 0.7rem;
          }
          
          .read-time {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogSection;
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, List, BookText, GraduationCap, Pencil } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Layout from '../components/layout/Layout';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="text-pink-700 h-10 w-10" />,
      title: 'Verb Tense Practice',
      description: 'Master all verb tenses with affirmative, negative, and interrogative examples',
      link: '/verb-tenses'
    },
    {
      icon: <List className="text-pink-700 h-10 w-10" />,
      title: 'Vocabulary',
      description: 'Learn essential vocabulary with pronunciation guides for Spanish speakers',
      link: '/vocabulary'
    },
    {
      icon: <BookText className="text-pink-700 h-10 w-10" />,
      title: 'Interactive Practice',
      description: 'Test your knowledge with quizzes and interactive exercises',
      link: '/practice'
    },
    {
      icon: <Pencil className="text-pink-700 h-10 w-10" />,
      title: 'Personal Notebook',
      description: 'Create your own vocabulary list with notes and export to PDF',
      link: '/notebook'
    }
  ];

  return (
    <Layout>
      <section className="py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <GraduationCap className="text-primary h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Improve Your English Skills
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Practice verb tenses, build vocabulary, and master pronunciation with interactive exercises for Spanish speakers
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/verb-tenses">
              <Button size="lg">
                Start Learning
              </Button>
            </Link>
            <Link to="/practice">
              <Button variant="outline" size="lg">
                Practice Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-xl mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How EnglishPro Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link 
                key={index} 
                to={feature.link}
                className="block h-full"
              >
                <Card className="h-full flex flex-col items-center text-center p-6 transition-all hover:-translate-y-1 duration-300">
                  <div className="flex items-center justify-center bg-opacity-10 p-4 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {feature.description}
                  </p>
                  <Button variant="ghost" className="mt-auto">
                    Explore
                  </Button>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to improve your English?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start practicing now and track your progress
          </p>
          <Link to="/practice">
            <Button size="lg">
              Begin Practice
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
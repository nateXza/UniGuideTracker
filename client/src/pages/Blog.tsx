import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    role: string;
  };
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
}

const Blog: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  // Sample blog posts data (in a real app, this would come from an API)
  const blogPostsData: BlogPost[] = [
    {
      id: 1,
      title: "How to Choose the Right University for You: 7 Factors to Consider",
      excerpt: "Selecting the right university is a crucial decision. We break down the key factors to help you make an informed choice that aligns with your goals and preferences.",
      content: "Full content would be here...",
      author: {
        name: "Thandi Nkosi",
        avatar: "TN",
        role: "Education Advisor"
      },
      date: "April 2, 2023",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "University Selection",
      tags: ["Universities", "Decision Making", "Campus Life"]
    },
    {
      id: 2,
      title: "Understanding NSFAS: Your Complete Guide to Funding Applications",
      excerpt: "Navigating NSFAS funding can be challenging. This comprehensive guide explains the application process, eligibility criteria, and important deadlines.",
      content: "Full content would be here...",
      author: {
        name: "Sipho Mabaso",
        avatar: "SM",
        role: "Financial Aid Specialist"
      },
      date: "March 15, 2023",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "Financial Aid",
      tags: ["NSFAS", "Student Funding", "Financial Aid"]
    },
    {
      id: 3,
      title: "From Matric to University: Preparing for the Academic Transition",
      excerpt: "The leap from high school to university can be challenging. Discover practical tips to prepare academically and emotionally for this significant life change.",
      content: "Full content would be here...",
      author: {
        name: "Dr. Lerato Molefe",
        avatar: "LM",
        role: "Academic Counselor"
      },
      date: "February 28, 2023",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "Student Life",
      tags: ["Academic Preparation", "First Year", "Student Success"]
    },
    {
      id: 4,
      title: "Top 10 High-Demand Careers in South Africa for the Next Decade",
      excerpt: "Looking ahead to career prospects? This analysis highlights the fastest-growing professions in South Africa and the qualifications you'll need to pursue them.",
      content: "Full content would be here...",
      author: {
        name: "Nomsa Khumalo",
        avatar: "NK",
        role: "Career Development Expert"
      },
      date: "February 10, 2023",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "Career Guidance",
      tags: ["Careers", "Job Market", "Employment Trends"]
    },
    {
      id: 5,
      title: "The Power of Soft Skills: What Universities Don't Teach You",
      excerpt: "Academic knowledge is just one piece of the puzzle. Learn about the critical soft skills that can set you apart in the job market and how to develop them.",
      content: "Full content would be here...",
      author: {
        name: "David Matseke",
        avatar: "DM",
        role: "Professional Development Coach"
      },
      date: "January 25, 2023",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Career Guidance",
      tags: ["Soft Skills", "Professional Development", "Employability"]
    },
    {
      id: 6,
      title: "Campus Life: Making the Most of Your University Experience",
      excerpt: "University is about more than just academics. Discover how to balance studies with extracurricular activities, social life, and personal growth opportunities.",
      content: "Full content would be here...",
      author: {
        name: "Zinhle Dlamini",
        avatar: "ZD",
        role: "Student Affairs Coordinator"
      },
      date: "January 12, 2023",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Student Life",
      tags: ["Campus Life", "Student Activities", "University Experience"]
    }
  ];
  
  // Categories for filtering
  const categories = [
    'All Categories',
    'University Selection',
    'Financial Aid',
    'Student Life',
    'Career Guidance',
    'Academic Tips'
  ];
  
  // Filter blog posts based on search term and selected category
  const filteredPosts = blogPostsData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'all' || post.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  // Featured post (first post)
  const featuredPost = blogPostsData[0];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
        {t('blog.title', 'UniGuide Blog')}
      </h1>
      
      <p className="text-xl text-gray-600 text-center mb-10 max-w-3xl mx-auto">
        {t('blog.subtitle', 'Insights, advice, and guidance for your educational journey')}
      </p>
      
      <div className="max-w-6xl mx-auto">
        {/* Featured Post */}
        <div className="mb-12">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="h-64 md:h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-100">
                      {featuredPost.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{featuredPost.date}</span>
                  </div>
                  
                  <CardTitle className="text-2xl md:text-3xl mb-3">
                    {featuredPost.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base text-gray-600 mb-4">
                    {featuredPost.excerpt}
                  </CardDescription>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarFallback>{featuredPost.author.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">{featuredPost.author.name}</p>
                      <p className="text-sm text-gray-500">{featuredPost.author.role}</p>
                    </div>
                  </div>
                  
                  <Button asChild className="flex items-center gap-1">
                    <a href={`/blog/${featuredPost.id}`}>
                      {t('blog.readMore', 'Read Full Article')}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder={t('blog.searchPlaceholder', 'Search articles by title, content, or tags')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="w-full md:w-64 flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <Select
              value={categoryFilter}
              onValueChange={(value) => setCategoryFilter(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t('blog.categoryFilterPlaceholder', 'Filter by category')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('blog.allCategories', 'All Categories')}</SelectItem>
                {categories.map((category, index) => (
                  category !== 'All Categories' && (
                    <SelectItem key={index} value={category}>
                      {category}
                    </SelectItem>
                  )
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Article Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {t('blog.noResults', 'No articles found')}
            </h3>
            <p className="text-gray-600">
              {t('blog.tryAdjusting', 'Try adjusting your search or filter criteria')}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/80 text-primary-800 hover:bg-white/90 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="pb-2 flex-grow">
                  <CardDescription className="line-clamp-3 text-gray-600">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
                
                <CardFooter className="flex flex-col items-start space-y-4 pt-0">
                  <div className="flex items-center justify-between w-full text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime} {t('blog.readTime', 'read')}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">{post.author.avatar}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{post.author.name}</span>
                  </div>
                  
                  <Button asChild variant="link" className="p-0 h-auto" size="sm">
                    <a href={`/blog/${post.id}`} className="flex items-center gap-1">
                      {t('blog.readArticle', 'Read article')}
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        {/* Pagination (would be dynamic in a real app) */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              {t('blog.previous', 'Previous')}
            </Button>
            <Button variant="outline" size="sm" className="bg-primary-50">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              {t('blog.next', 'Next')}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Newsletter Signup */}
      <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {t('blog.newsletter.title', 'Stay Updated')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('blog.newsletter.description', 'Subscribe to our newsletter for the latest articles, tips, and university guidance resources.')}
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder={t('blog.newsletter.emailPlaceholder', 'Your email address')}
              className="flex-grow"
            />
            <Button type="submit" className="bg-gradient-to-r from-blue-600 to-indigo-700">
              {t('blog.newsletter.subscribe', 'Subscribe')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;
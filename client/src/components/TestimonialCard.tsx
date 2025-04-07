import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Testimonial } from '@/lib/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star text-yellow-400"></i>);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt text-yellow-400"></i>);
    }
    
    // Add empty stars to make 5 total
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-star-${i}`} className="far fa-star text-yellow-400"></i>);
    }
    
    return stars;
  };
  
  return (
    <Card className="bg-gray-50 rounded-lg shadow-sm p-6">
      <CardContent className="p-0">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
            {testimonial.initials}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
        <div className="text-gray-600">
          <p>"{testimonial.text}"</p>
        </div>
        <div className="mt-4 flex">
          {renderStars(testimonial.rating)}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;

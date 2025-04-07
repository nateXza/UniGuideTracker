import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useTranslation } from '@/hooks/useTranslation';
import { useToast } from '@/hooks/use-toast';

// Contact form schema validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      // In a real implementation, this would make an API call to send the contact form
      console.log('Contact form submitted:', values);
      
      toast({
        title: t('contact.success', 'Message sent!'),
        description: t('contact.successMessage', 'We will get back to you as soon as possible.'),
      });
      
      form.reset();
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        variant: 'destructive',
        title: t('contact.error', 'Failed to send message'),
        description: t('contact.errorMessage', 'Please try again later.'),
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
        {t('contact.title', 'Contact Us')}
      </h1>
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600">
              {t('contact.description', 'Have questions about our university guidance platform? We are here to help! Fill out the form and we will get back to you as soon as possible.')}
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-3 text-base text-gray-600">
                  <p>{t('contact.email', 'Email')}</p>
                  <p className="font-medium text-gray-800">info@uniguide.co.za</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-3 text-base text-gray-600">
                  <p>{t('contact.phone', 'Phone')}</p>
                  <p className="font-medium text-gray-800">+27 21 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-3 text-base text-gray-600">
                  <p>{t('contact.address', 'Address')}</p>
                  <p className="font-medium text-gray-800">
                    123 Education Street<br />
                    Cape Town 8001<br />
                    South Africa
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {t('contact.operatingHours', 'Operating Hours')}
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li><span className="font-medium">Monday - Friday:</span> 8:00 AM - 5:00 PM</li>
                <li><span className="font-medium">Saturday:</span> 9:00 AM - 1:00 PM</li>
                <li><span className="font-medium">Sunday:</span> Closed</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t('contact.formTitle', 'Send us a message')}
          </h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.nameLabel', 'Name')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('contact.namePlaceholder', 'Your name')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.emailLabel', 'Email')}</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder={t('contact.emailPlaceholder', 'your.email@example.com')}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.subjectLabel', 'Subject')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('contact.subjectPlaceholder', 'How can we help you?')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.messageLabel', 'Message')}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={t('contact.messagePlaceholder', 'Type your message here...')}
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-700">
                {t('contact.submit', 'Send Message')}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
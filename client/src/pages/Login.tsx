import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { useTranslation } from '@/hooks/useTranslation';
import { loginSchema } from '@shared/schema';
import { useToast } from '@/hooks/use-toast';

// Create a custom schema for the login form
const formSchema = z.object({
  username: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Login: React.FC = () => {
  const { t } = useTranslation();
  const [location, setLocation] = useLocation();
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      // In a real implementation, this would make an API call to authenticate
      console.log('Login submitted:', values);
      
      toast({
        title: t('login.success', 'Login successful!'),
        description: t('login.redirecting', 'Redirecting to your profile...'),
      });
      
      // Simulate a delay before redirecting
      setTimeout(() => {
        setLocation('/profile');
      }, 1500);
    } catch (error) {
      console.error('Login error:', error);
      toast({
        variant: 'destructive',
        title: t('login.error', 'Login failed'),
        description: t('login.errorMessage', 'Please check your email and password and try again.'),
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {t('login.title', 'Welcome Back')}
          </h1>
          <p className="text-gray-600 mt-2">
            {t('login.subtitle', 'Sign in to your UniGuide account')}
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('login.emailLabel', 'Email')}</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder={t('login.emailPlaceholder', 'name@example.com')} 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('login.passwordLabel', 'Password')}</FormLabel>
                  <FormControl>
                    <Input 
                      type="password" 
                      placeholder={t('login.passwordPlaceholder', '••••••••')} 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-medium cursor-pointer">
                      {t('login.rememberMe', 'Remember me')}
                    </FormLabel>
                  </FormItem>
                )}
              />
              
              <Link href="/forgot-password" className="text-sm font-medium text-primary-600 hover:text-primary-500">
                {t('login.forgotPassword', 'Forgot password?')}
              </Link>
            </div>
            
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-700">
              {t('login.signIn', 'Sign in')}
            </Button>
          </form>
        </Form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {t('login.noAccount', 'Don\'t have an account?')}{' '}
            <Link href="/profile" className="font-medium text-primary-600 hover:text-primary-500">
              {t('login.createAccount', 'Create one now')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
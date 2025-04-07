import React, { useEffect } from 'react';
import { useLocation } from 'wouter';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import ProgressSteps from '@/components/ProgressSteps';
import { useTranslation } from '@/hooks/useTranslation';
import { useProfile } from '@/context/ProfileContext';
import { fieldsOfStudy } from '@/data/fieldsOfStudy';

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();
  const [, navigate] = useLocation();
  const { profile, updateProfile } = useProfile();

  // Form schema validation
  const formSchema = z.object({
    firstName: z.string().min(2, { message: t('profile.validation.firstName') }),
    lastName: z.string().min(2, { message: t('profile.validation.lastName') }),
    email: z.string().email({ message: t('profile.validation.email') }),
    grade: z.string({ required_error: t('profile.validation.grade') }),
    province: z.string({ required_error: t('profile.validation.province') }),
    averageMark: z.number().min(0).max(100).optional(),
    mathMark: z.number().min(0).max(100).optional(),
    scienceMark: z.number().min(0).max(100).optional(),
    englishMark: z.number().min(0).max(100).optional(),
    fieldOfStudy: z.string().optional(),
    financialAid: z.boolean().default(false),
    nsfasFunding: z.boolean().default(false),
  });

  type FormValues = z.infer<typeof formSchema>;

  // Set up form with default values
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: profile.firstName || '',
      lastName: profile.lastName || '',
      email: profile.email || '',
      grade: profile.grade || '',
      province: profile.province || '',
      averageMark: profile.averageMark || undefined,
      mathMark: profile.mathMark || undefined,
      scienceMark: profile.scienceMark || undefined,
      englishMark: profile.englishMark || undefined,
      fieldOfStudy: profile.fieldOfStudy || '',
      financialAid: profile.financialAid || false,
      nsfasFunding: profile.nsfasFunding || false,
    },
  });

  // Handle form submission
  const onSubmit = (values: FormValues) => {
    updateProfile(values);
    navigate('/assessment');
  };

  // Initialize form with profile data when available
  useEffect(() => {
    if (profile) {
      form.reset({
        firstName: profile.firstName || '',
        lastName: profile.lastName || '',
        email: profile.email || '',
        grade: profile.grade || '',
        province: profile.province || '',
        averageMark: profile.averageMark || undefined,
        mathMark: profile.mathMark || undefined,
        scienceMark: profile.scienceMark || undefined,
        englishMark: profile.englishMark || undefined,
        fieldOfStudy: profile.fieldOfStudy || '',
        financialAid: profile.financialAid || false,
        nsfasFunding: profile.nsfasFunding || false,
      });
    }
  }, [profile, form]);

  const provinceOptions = [
    'Eastern Cape',
    'Free State',
    'Gauteng',
    'KwaZulu-Natal',
    'Limpopo',
    'Mpumalanga',
    'Northern Cape',
    'North West',
    'Western Cape'
  ];

  const gradeOptions = ['Grade 11', 'Grade 12', 'Gap Year', 'Working'];

  return (
    <section className="bg-primary-50 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('profile.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t('profile.subtitle')}
          </p>
        </div>

        {/* Progress Steps */}
        <ProgressSteps currentStep={1} />

        {/* Profile Form */}
        <div className="bg-white shadow rounded-lg max-w-3xl mx-auto p-6 sm:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('profile.personalInfo')}</h3>
              
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-3">
                      <FormLabel>{t('profile.form.firstName')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('profile.form.firstNamePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-3">
                      <FormLabel>{t('profile.form.lastName')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('profile.form.lastNamePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-4">
                      <FormLabel>{t('profile.form.email')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('profile.form.emailPlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Grade */}
                <FormField
                  control={form.control}
                  name="grade"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>{t('profile.form.grade')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('profile.form.gradePlaceholder')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {gradeOptions.map((grade) => (
                            <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Province */}
                <FormField
                  control={form.control}
                  name="province"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-6">
                      <FormLabel>{t('profile.form.province')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('profile.form.provincePlaceholder')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {provinceOptions.map((province) => (
                            <SelectItem key={province} value={province}>{province}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('profile.academicInfo')}</h3>
              
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                {/* Average Mark */}
                <FormField
                  control={form.control}
                  name="averageMark"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-3">
                      <FormLabel>{t('profile.form.averageMark')}</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min="0" 
                          max="100" 
                          placeholder={t('profile.form.markPlaceholder')} 
                          {...field}
                          value={field.value?.toString() || ''}
                          onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Math Mark */}
                <FormField
                  control={form.control}
                  name="mathMark"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-3">
                      <FormLabel>{t('profile.form.mathMark')}</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min="0" 
                          max="100" 
                          placeholder={t('profile.form.markPlaceholder')} 
                          {...field}
                          value={field.value?.toString() || ''}
                          onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Science Mark */}
                <FormField
                  control={form.control}
                  name="scienceMark"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-3">
                      <FormLabel>{t('profile.form.scienceMark')}</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min="0" 
                          max="100" 
                          placeholder={t('profile.form.markPlaceholder')} 
                          {...field}
                          value={field.value?.toString() || ''}
                          onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* English Mark */}
                <FormField
                  control={form.control}
                  name="englishMark"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-3">
                      <FormLabel>{t('profile.form.englishMark')}</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min="0" 
                          max="100" 
                          placeholder={t('profile.form.markPlaceholder')} 
                          {...field}
                          value={field.value?.toString() || ''}
                          onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('profile.studyPreferences')}</h3>
              
              <div className="space-y-6">
                {/* Field of Study */}
                <FormField
                  control={form.control}
                  name="fieldOfStudy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('profile.form.fieldOfStudy')}</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="mt-2 grid grid-cols-1 gap-y-2 sm:grid-cols-2 gap-x-4"
                        >
                          {fieldsOfStudy.map((studyField) => (
                            <div key={studyField.id} className="flex items-center space-x-2">
                              <RadioGroupItem value={studyField.name} id={`field-${studyField.id}`} />
                              <Label htmlFor={`field-${studyField.id}`}>{studyField.name}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Financial Considerations */}
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('profile.form.financialConsiderations')}
                  </Label>
                  <div className="mt-2 space-y-2">
                    <FormField
                      control={form.control}
                      name="financialAid"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              {t('profile.form.needScholarship')}
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nsfasFunding"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              {t('profile.form.nsfasFunding')}
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end space-x-3">
                <Button variant="outline" type="button">
                  {t('profile.form.saveDraft')}
                </Button>
                <Button type="submit">
                  {t('profile.form.continue')}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      form.reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6 text-center">Get in Touch</h2>
        <p className="text-center text-secondary max-w-2xl mx-auto mb-12">Interested in working together or purchasing prints? I'd love to hear from you.</p>
        
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-secondary font-medium">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="w-full px-4 py-3 border border-accent rounded-md focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors"
                        />
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
                      <FormLabel className="text-secondary font-medium">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your.email@example.com" 
                          type="email" 
                          {...field} 
                          className="w-full px-4 py-3 border border-accent rounded-md focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors"
                        />
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
                      <FormLabel className="text-secondary font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project or inquiry..." 
                          rows={5} 
                          {...field} 
                          className="w-full px-4 py-3 border border-accent rounded-md focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-accent bg-opacity-30 rounded-lg p-8">
              <h3 className="font-serif font-bold text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary mr-4">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Location</h4>
                    <p className="text-secondary">Portland, Oregon</p>
                    <p className="text-secondary">Available for travel worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary mr-4">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Email</h4>
                    <p className="text-secondary">hello@emmarivers.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary mr-4">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Phone</h4>
                    <p className="text-secondary">(503) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary mr-4">
                    <i className="fas fa-clock text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Working Hours</h4>
                    <p className="text-secondary">Monday - Friday: 9am - 5pm PST</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-primary mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Pinterest">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

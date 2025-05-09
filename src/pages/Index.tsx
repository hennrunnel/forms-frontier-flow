
import React, { useState } from 'react';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import Tabs from '../components/Tabs';
import IntegrationCard from '../components/IntegrationCard';
import IconMailchimp from '../components/IconMailchimp';
import IconCustomApi from '../components/IconCustomApi';
import IconGoogleSheets from '../components/IconGoogleSheets';
import IconGoogleAdWords from '../components/IconGoogleAdWords';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeTab, setActiveTab] = useState('integrations');
  const { toast } = useToast();

  const handleAction = (integration: string, action: string) => {
    toast({
      title: `${integration} integration`,
      description: `Action: ${action}`,
      duration: 3000,
    });
  };

  const tabs = [
    { id: 'forms', label: 'Forms' },
    { id: 'integrations', label: 'Integrations' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header username="James" avatarUrl="/lovable-uploads/5657f0e0-4d6d-4e95-bde4-209ac7e1a6d5.png" />
      
      <PageTitle 
        title="Forms" 
        subtitle="Finn & Cross" 
        onBack={() => console.log('Go back')} 
      />
      
      <div className="container mx-auto px-4">
        <div className="bg-white rounded shadow-card max-w-[992px] mx-auto">
          <Tabs 
            items={tabs} 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <IntegrationCard
                title="Mailchimp"
                description="Automatically export your form submits to Mailchimp"
                icon={<IconMailchimp />}
                actionType="primary"
                actionLabel="Configure"
                onAction={() => handleAction('Mailchimp', 'Configure')}
              />
              
              <IntegrationCard
                title="Google Sheets"
                description="Automatically export your form submits to Google Sheets."
                icon={<IconGoogleSheets />}
                actionType="secondary"
                actionLabel="Let's do it"
                onAction={() => handleAction('Google Sheets', 'Setup')}
              />
              
              <IntegrationCard
                title="Google AdWords"
                description="Add emails to AdWords remarketing list."
                icon={<IconGoogleAdWords />}
                actionType="secondary"
                actionLabel="Let's do it"
                onAction={() => handleAction('Google AdWords', 'Setup')}
              />
              
              <IntegrationCard
                title="Custom API"
                description="Automatically send form data to your server."
                icon={<IconCustomApi />}
                actionType="secondary"
                actionLabel="Let's do it"
                onAction={() => handleAction('Custom API', 'Setup')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

export interface LeadData {
  location: string;
  treeImages: File[];
  serviceType: 'trimming' | 'removal' | 'both';
  urgency: 'low' | 'medium' | 'high';
  treeHeight: 'small' | 'medium' | 'large';
  accessibility: string;
  name: string;
  email: string;
  phone: string;
  additionalNotes?: string;
}
export type Language = 'en' | 'es';

export type ConceptMode = 'concept3' | 'concept1' | 'concept2';

export interface DealSubmissionData {
  propertyAddress: string;
  city: string;
  zipCode: string;
  purchasePrice: string;
  executionDate: string;
  targetClosingDate: string;
  representation: 'buyer' | 'seller' | 'dual';
  agentName: string;
  agentEmail: string;
  agentPhone: string;
  brokerage: string;
  buyerName: string;
  sellerName: string;
  titleCompany: string;
  notes: string;
  hasExecutedContract: boolean;
}

export interface BookingCallData {
  fullName: string;
  email: string;
  phone: string;
  brokerage: string;
  monthlyDeals: string;
  preferredDate: string;
  preferredTime: string;
  mainChallenge: string;
}

export interface HomeStep {
  id: string;
  letter: 'H' | 'O' | 'M' | 'E';
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  milestone: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  brokerage: string;
  location: string;
  image: string;
  quote: string;
  highlight: string;
  rating: number;
}

export interface CoverageArea {
  region: string;
  hubs: string;
  description: string;
  cities: string[];
}

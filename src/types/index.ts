export interface PracticeArea {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  topics: string[];
  iconName: string;
  popular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  source: 'Google';
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  practiceArea: string;
  urgency: 'baixa' | 'media' | 'alta';
  message: string;
  preferredDate?: string;
  preferredTime?: string;
}

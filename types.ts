
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
}

export interface VideoProject extends Project {
  videoUrl: string;
  description: string;
  tech: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

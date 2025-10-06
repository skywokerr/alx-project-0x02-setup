// Basic interface examples for the project
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

// Card component interface
export interface CardProps {
  title: string;
  content: string;
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
}
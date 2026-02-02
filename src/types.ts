/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


export interface ProductItem {
  id: string;
  name: string;
  description: string;
  specs: string[]; // e.g., "85x200cm", "PVC"
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  // Preview Data (Homepage)
  previewText: string;
  features: string[]; // Used for bullets in preview
  // Full Data (Services Page)
  fullDescription: string;
  advantages: string[];
  applications: string[];
  image: string;
  icon?: any; // Lucide Icon Component
  relatedProducts?: ProductItem[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  client?: string;
  year?: string;
  description?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export type ViewState = 'home' | 'services' | 'portfolio' | 'contacts';
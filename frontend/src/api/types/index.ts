// src/types/index.ts
export interface Campaign {
    title: string;
    description: string;
    targetAmount: number;
    currentAmount: number;
    startDate: string;
    endDate: string;
    owner: string; // User ID
    categories: string[];
    location: string;
    isActive: boolean;
  }
  
// src/types/index.ts
export interface Campaign {
    title: string;
    description: string;
    targetAmount: number;
    endDate: string;
    tag: string;
    owner: string; // User ID
    whyCare: string[];
  }
  
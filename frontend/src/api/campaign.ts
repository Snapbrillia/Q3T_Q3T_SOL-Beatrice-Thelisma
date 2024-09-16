// src/api/campaign.ts
import apiClient from './apiClient';
import { Campaign } from './types';

export const getAllCampaigns = async (): Promise<Campaign[]> => {
  const { data } = await apiClient.get('/campaigns');
  return data;
};

export const getCampaignById = async (id: string): Promise<Campaign> => {
  const { data } = await apiClient.get(`/campaigns/${id}`);
  return data;
};

export const createCampaign = async (campaign: Campaign): Promise<Campaign> => {
  const { data } = await apiClient.post('/campaigns', campaign);
  return data;
};

import fetch, { RequestInit } from 'node-fetch';

type Config = {
  apiKey: string;
  baseUrl?: string;
};

export abstract class Base {
  private apiKey: string;
  private baseUrl: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || 'https://jsonplaceholder.typicode.com';
  }

  protected async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'api-key': this.apiKey,
    };
    const config: RequestInit = {
      ...options,
      headers: {
        ...headers,
        ...options?.headers,
      },
    };

    const response = await fetch(url, config);
    if (response.ok) {
      const data = await response.json();
      return data as T;
    }
    throw new Error(response.statusText);
  }
}
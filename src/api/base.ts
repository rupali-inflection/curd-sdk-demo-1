// import fetch, { RequestInit } from 'node-fetch';
import fetch from 'isomorphic-unfetch';
type Config = {
  apiKey?: string;
  baseUrl: string;
};

export abstract class Base {
  private apiKey: string;
  private baseUrl: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey ?? 'xyz';
    this.baseUrl = config.baseUrl;
  }

  // protected async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  //   const url = `${this.baseUrl}${endpoint}`;
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'api-key': this.apiKey,
  //   };
  //   const config: RequestInit = {
  //     ...options,
  //     headers: {
  //       ...headers,
  //       ...options?.headers,
  //     },
  //   };

  //   const response = await fetch(url, config);
  //   if (response.ok) {
  //     const data = await response.json();
  //     return data as T;
  //   }
  //   throw new Error(response.statusText);
  // }
  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'x-api-key': `${this.apiKey}`
    };
    const config = {
      ...options,
      headers,
    };

    return fetch(url, config).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
  }

}

import type { NextApiRequest } from 'next'

export interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    name: string;
    email: string;
    curso: string;
    subject: string;
    message: string;
  };
};
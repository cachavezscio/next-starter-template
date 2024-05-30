import { prisma } from '@/lib';
import { Idea } from '@prisma/client';

/**
 * Retrieves all ideas posts from the database.
 * @returns A promise that resolves to an array of Idea objects.
 */
export const fetchIdeasAction = async (): Promise<Idea[]> => {
  return await prisma.idea.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
  });
};

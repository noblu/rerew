import React, { useState } from 'react';
import { collections } from './styles';

export async function getNFTSales() {
  try {
    const promises = collections.map(async (collection): Promise<any> => {
      const response = await fetch(
        `https://api.opensea.io/api/v1/collection/${collection}`,
      );
      let res = await response.json();
      return res.collection;
    });
    const results = await Promise.all(promises);
    return results.flat();
  } catch (error) {
    throw error;
  }
}

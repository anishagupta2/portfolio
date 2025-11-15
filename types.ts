
import type React from 'react';

export interface Experience {
  school: string;
  duration: string;
  role: string;
  description: string;
}

export interface Qualification {
  degree: string;

  institution: string;
  icon?: React.ReactNode;
}

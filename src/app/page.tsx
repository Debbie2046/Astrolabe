'use client';

import { useReadingStore } from '@/stores/readingStore';
import HomePage from '@/components/ritual/HomePage';
import QuestionPage from '@/components/ritual/QuestionPage';
import SpreadPage from '@/components/ritual/SpreadPage';
import ShufflePage from '@/components/ritual/ShufflePage';
import SelectPage from '@/components/ritual/SelectPage';
import ReadingPage from '@/components/reading/ReadingPage';

export default function Home() {
  const step = useReadingStore((state) => state.step);

  const renderStep = () => {
    switch (step) {
      case 'home':
        return <HomePage />;
      case 'question':
        return <QuestionPage />;
      case 'spread':
        return <SpreadPage />;
      case 'shuffle':
        return <ShufflePage />;
      case 'select':
        return <SelectPage />;
      case 'reveal':
      case 'reading':
        return <ReadingPage />;
      default:
        return <HomePage />;
    }
  };

  return renderStep();
}
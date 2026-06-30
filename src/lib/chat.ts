import { compareTwoStrings } from 'string-similarity';
import { faqData, FAQItem } from '../data/faq';

export interface MatchResult {
  faq: FAQItem | null;
  confidence: number;
}

export function findBestFAQMatch(userQuestion: string): MatchResult {
  const normalizedQuestion = userQuestion.toLowerCase().trim();

  let bestMatch: FAQItem | null = null;
  let highestConfidence = 0;

  for (const faq of faqData) {
    // Exact match
    if (faq.question.toLowerCase() === normalizedQuestion) {
      return { faq, confidence: 1.0 };
    }

    // Contains match
    if (
      normalizedQuestion.includes(faq.question.toLowerCase()) ||
      faq.question.toLowerCase().includes(normalizedQuestion)
    ) {
      return { faq, confidence: 0.9 };
    }

    // Keyword match
    const keywordMatches = faq.keywords.filter((keyword) =>
      normalizedQuestion.includes(keyword.toLowerCase())
    );
    if (keywordMatches.length > 0) {
      const confidence = Math.min(0.8, keywordMatches.length * 0.2);
      if (confidence > highestConfidence) {
        bestMatch = faq;
        highestConfidence = confidence;
      }
    }

    // Fuzzy similarity
    const similarity = compareTwoStrings(
      normalizedQuestion,
      faq.question.toLowerCase()
    );
    if (similarity > highestConfidence) {
      bestMatch = faq;
      highestConfidence = similarity;
    }
  }

  return { faq: bestMatch, confidence: highestConfidence };
}

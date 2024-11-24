export const matchResumeToJob = (resumeText, jobDescription) => {
  const resumeKeywords = extractKeywords(resumeText); // Extract keywords from resume
  const jobKeywords = extractKeywords(jobDescription); // Extract keywords from job description

  const matchingKeywords = resumeKeywords.filter(keyword => jobKeywords.includes(keyword));
  return matchingKeywords; // Return matching keywords
};

const extractKeywords = (text) => {
  // Ensure text is a valid string before processing or handle array input
  if (Array.isArray(text)) {
    // If the input is already an array of words, use it directly
    return text;
  }
  if (typeof text !== 'string') {
    console.error('Invalid text input:', text); // Log the invalid input for debugging
    return [];
  }

  // Process the text if it's a valid string
  const stopWords = [
    "a", "an", "the", "and", "but", "or", "on", "in", "with", "at", "by", "for", "of", "to", "from", "as", "so", "it", "this", "that", "these", "those"
  ];

  const normalizedText = text.toLowerCase().replace(/[^a-z\s]/g, "");
  const words = normalizedText.split(/\s+/);
  const wordCount = {};

  words.forEach((word) => {
    if (!stopWords.includes(word) && word.length > 1) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  });

  const sortedKeywords = Object.entries(wordCount)
    .sort(([, countA], [, countB]) => countB - countA)
    .map(([word]) => word);

  return sortedKeywords;
};

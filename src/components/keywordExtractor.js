export const extractKeywords = (text) => {
    const stopWords = [
      "a", "an", "the", "and", "but", "or", "on", "in", "with", "at", "by", "for", "of", "to", "from", "as", "so", "it", "this", "that", "these", "those"
    ]; // Add more stop words as needed
  
    // Normalize the text by converting to lowercase and removing non-alphabetic characters
    const normalizedText = text.toLowerCase().replace(/[^a-z\s]/g, "");
  
    // Split the text into an array of words
    const words = normalizedText.split(/\s+/);
  
    // Remove stop words and count the frequency of each word
    const wordCount = {};
    words.forEach((word) => {
      if (!stopWords.includes(word) && word.length > 1) { // Ignore single-letter words and stop words
        wordCount[word] = (wordCount[word] || 0) + 1;
      }
    });
  
    // Sort the words by frequency
    const sortedKeywords = Object.entries(wordCount)
      .sort(([, countA], [, countB]) => countB - countA) // Sort by frequency in descending order
      .map(([word]) => word); // Extract only the words (sorted by frequency)
  
    return sortedKeywords;
  };
  
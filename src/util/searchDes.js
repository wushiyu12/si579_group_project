import {removeStopwords} from 'stopword';


const searchDes = (documents, query) => {

    // a basic tf counter without stopword
    const countTermFrequencies = (text) => {
        const frequencies = {};
        if (text !== ''){
            const words = removeStopwords(text.toLowerCase().match(/\b(\w+)\b/g));
            words.forEach(word => {
            frequencies[word] = (frequencies[word] || 0) + 1;
          });
        }

        return frequencies;
      };
    
    // count the tf in query doc and get score
    const queryFrequencies = countTermFrequencies(query);
    
    if (documents.length === 0){
        return ([]);
    }
    else{
        return (
            documents.map((doc) => {
            const docFrequencies = countTermFrequencies(doc["Course Description"]);
            let score = 0;
            for (const term in queryFrequencies) {
              score += (docFrequencies[term] || 0);
            }
            return { doc, score };
        }).filter((doc) => doc.score > 0)
        .sort((a, b) => b.score - a.score)
          .map(item => item.doc)); // Return only the document, not the score
    }
    
};


export{searchDes};
export interface BlobProps {
    id: number;
    color: string;
    top: string;
    left: string;
    animationName: string;
}

const injectKeyframes = (blobId: number, keyframes: string) => {
    const styleSheet = document.styleSheets[0];
    const animationName = `blobAnimation-${blobId}`;
    const rule = `@keyframes ${animationName} { ${keyframes} }`;
    styleSheet.insertRule(rule, styleSheet.cssRules.length);
    return animationName;
};

const generateBlobKeyframes = () => {
    const randomValue = (min: number, max: number) => Math.random() * (max - min) + min;
  
    // Generate a series of 5 random positions for blobs to travel to
    const keyframes = Array.from({ length: 5 }, (_, i) => {
        const percentage = (i / 4) * 100;                   // Distribute percentages evenly
        const x = randomValue(-20, 20);                     // Random x translation between -20 and 20 vw
        const y = randomValue(-10, 10);                     // Random y translation between -10 and 10 vh
        return `${percentage}% { transform: translate(${x}vw, ${y}vh); }`;
    }).join("\n");
  
    return keyframes;
};

export const generateBlobs = (count: number, colors: string[]): BlobProps[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        color: colors[i % colors.length],
        left: `${i * 15 + 7.5}vw`,
        top: `calc(${Math.random() * 50 + 25}vh - 12.5vw)`,
        animationName: injectKeyframes(i, generateBlobKeyframes()),
    }));
};

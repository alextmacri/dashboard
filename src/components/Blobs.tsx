import React from "react";
import { generateBlobs, BlobProps } from "../utils/generateBlobs";
import "./blobs.css";

// interface for Blobs props: the amount of blobs to generate and their colors
interface BlobsProps {
    count: number;
    colors: string[];
}

const Blobs: React.FC<BlobsProps> = ({ count, colors }) => {
    const blobs: BlobProps[] = generateBlobs(count, colors);

    return (
        <div className="blob-container">
            {blobs.map((blob) => (
                <div
                    key={blob.id}
                    className="blob"
                    style={{
                        backgroundColor: blob.color,
                        top: blob.top,
                        left: blob.left,
                        animation: `${blob.animationName} ${6 + Math.random() * 10}s infinite alternate ease-in-out`,
                    }}
                />
            ))}
        </div>
    );
};

export default Blobs;

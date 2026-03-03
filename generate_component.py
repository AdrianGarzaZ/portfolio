import re

with open('mexico_outline.svg', 'r') as f:
    svg_content = f.read()

match = re.search(r'<g.*?>\s*(.*?)\s*</g>', svg_content, re.DOTALL | re.IGNORECASE)
if match:
    g_content = match.group(1)
    
    jsx = f"""import React from "react";

export default function MexicoMap(props: React.SVGProps<SVGSVGElement>) {{
    return (
        <svg viewBox="0 0 1024 1024" preserveAspectRatio="xMidYMid meet" {{...props}}>
            <g transform="translate(0, 1024) scale(0.1, -0.1)" fill="rgba(30, 41, 59, 1)" stroke="rgba(71, 85, 105, 0.8)" strokeWidth="15" vectorEffect="non-scaling-stroke">
                {g_content}
            </g>
        </svg>
    );
}}
"""
    with open('src/components/MexicoMap.tsx', 'w') as out:
        out.write(jsx)
        print("Successfully wrote MexicoMap.tsx")
else:
    print("Failed to find <g> tag content")


import os

with open('mexico_outline.svg', 'r') as f:
    svg_content = f.read()

# Replace fill to match slate-950 and stroke
svg_content = svg_content.replace('fill="#000000"', 'fill="rgba(30, 41, 59, 0.5)"').replace('stroke="none"', 'stroke="rgba(71, 85, 105, 0.8)" stroke-width="20"')

html = f"""<!DOCTYPE html>
<html>
<head>
<style>
  body {{ background: #0f172a; padding: 50px; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }}
  .map-container {{ width: 800px; height: 800px; transform: rotateX(45deg) rotateZ(-25deg); transform-style: preserve-3d; }}
</style>
</head>
<body>
    <div class="map-container">
        {svg_content}
    </div>
</body>
</html>
"""

with open('preview.html', 'w') as f:
    f.write(html)

import numpy as np
import re
from svgpathtools import parse_path
from matplotlib.path import Path as MplPath
import random

with open('mexico_outline.svg', 'r') as f:
    svg = f.read()

match = re.search(r'd="([^"]+)"', svg)
path_data = match.group(1)

p = parse_path(path_data)
polygon = []
for segment in p:
    # 5 points per segment to create a high-res boundary
    for t in np.linspace(0, 1, 5):
        pt = segment.point(t)
        polygon.append([pt.real, pt.imag])

mpl_path = MplPath(polygon)

xmin, xmax, ymin, ymax = p.bbox()

valid_points = []
# Ensure points are safely tucked inside the borders, roughly middle-ish
while len(valid_points) < 12:
    x = random.uniform(xmin + (xmax-xmin)*0.1, xmax - (xmax-xmin)*0.1)
    y = random.uniform(ymin + (ymax-ymin)*0.1, ymax - (ymax-ymin)*0.1)
    if mpl_path.contains_point((x, y)):
        valid_points.append((x, y))

final_pts = []
for x, y in valid_points:
    x_new = x * 0.1
    y_new = y * -0.1 + 1024
    
    p_x = x_new / 10.24 # map 0-1024 to 0-100
    p_y = y_new / 10.24
    
    final_pts.append((round(p_x, 1), round(p_y, 1)))

print("--- COPY BELOW TO FILE ---")
print("const mapLocations = [")
chunks = []
for i in range(0, len(final_pts), 4):
    chunks.append("    " + ", ".join([f"{{ x: {pt[0]}, y: {pt[1]} }}" for pt in final_pts[i:i+4]]))
print(",\n".join(chunks))
print("];")

# Find a point in the upper-right interior roughly matching Monterrey
mont_valid = [pt for pt in valid_points if pt[0] > (xmin + (xmax-xmin)*0.45) and pt[1] < (ymin + (ymax-ymin)*0.4) and pt[0] < xmax - (xmax-xmin)*0.2]
if mont_valid:
    x, y = mont_valid[0]
else:
    x, y = valid_points[0]

x_new = x * 0.1
y_new = y * -0.1 + 1024
p_x = x_new / 10.24
p_y = y_new / 10.24
print(f"const redDot = {{ x: {round(p_x, 1)}, y: {round(p_y, 1)} }}; // Monterrey area")
print("--------------------------")

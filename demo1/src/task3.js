export function sortTriangles(triangles) {
  triangles.forEach(triangle => triangle.area = getArea(triangle))
  return triangles.sort((a, b) => b.area - a.area).map(triangle => triangle.vertices)
}

function getArea(triangle) {
  const sides = triangle.vertices
  const p = (triangle[sides[0]] + triangle[sides[1]] + triangle[sides[2]]) / 2
  return Math.sqrt(p * (p - triangle[sides[0]]) * (p - triangle[sides[1]]) * (p - triangle[sides[2]]))
}
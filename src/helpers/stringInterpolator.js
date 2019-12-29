export function stringInterpolator (string, dictionary) {
  return string.replace(/\${([^}]*)}/g, (r,k)=>dictionary[k])
}

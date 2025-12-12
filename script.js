function replaceSpaces() {
  const input = document.getElementById('replaceInput').value;
  const output = input.replace(/\s+/g, '');
  document.getElementById('replaceOutput').textContent = `Output: ${output}`;
}

